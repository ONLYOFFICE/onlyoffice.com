import crypto from "crypto";

export function generateAuthToken(pkey: string, machinekey: string): string {
  const now = new Date()
    .toISOString()
    .replace(/[-:T.Z]/g, "")
    .slice(0, 14);

  const hmac = crypto.createHmac("sha1", machinekey);
  hmac.update(`${now}\n${pkey}`);

  const base64 = hmac.digest("base64");
  const base64Url = base64
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  return `ASC ${pkey}:${now}:${base64Url}`;
}
