import crypto from "crypto";

const cache = new Map<string, { value: string; expires: number }>();
const validIntervalMs = 60 * 60 * 1000;
const secret = process.env.ENCRYPTION_SECRET || "default_secret";

function base64UrlEncode(buffer: Buffer): string {
  return buffer
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function base64UrlDecode(base64url: string): Buffer {
  const base64 = base64url
    .replace(/-/g, "+")
    .replace(/_/g, "/")
    .padEnd(base64url.length + ((4 - (base64url.length % 4)) % 4), "=");
  return Buffer.from(base64, "base64");
}

export async function encrypt(value: string): Promise<string> {
  const iv = crypto.randomBytes(16);
  const key = crypto.scryptSync(secret, "salt", 32);
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  const encrypted = Buffer.concat([
    cipher.update(value, "utf8"),
    cipher.final(),
  ]);
  return base64UrlEncode(Buffer.concat([iv, encrypted]));
}

export async function decrypt(value: string): Promise<string> {
  const data = base64UrlDecode(value);
  const iv = data.subarray(0, 16);
  const encryptedText = data.subarray(16);
  const key = crypto.scryptSync(secret, "salt", 32);
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  const decrypted = Buffer.concat([
    decipher.update(encryptedText),
    decipher.final(),
  ]);
  return decrypted.toString("utf8");
}

export function getKey(email: string): string {
  return crypto.createHmac("sha256", secret).update(email).digest("hex");
}

export function validateKey(
  cacheKey: string,
  publicKey: string,
  secretKey: string,
): boolean {
  const now = Date.now();

  const cached = cache.get(cacheKey);
  if (cached && cached.expires > now) {
    return false;
  }

  const expectedKey = getKey(publicKey);
  const isValid = expectedKey === secretKey;

  cache.set(cacheKey, {
    value: secretKey,
    expires: now + validIntervalMs,
  });

  return isValid;
}
