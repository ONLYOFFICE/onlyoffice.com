import sjcl from "sjcl";

type TPasswordHash = {
  size: number;
  iterations: number;
  salt: string;
};

const hasOwnProperty = (obj: unknown, propertyName: string): boolean => {
  if (!obj) return false;

  try {
    return Object.prototype.hasOwnProperty.call(obj, propertyName);
  } catch {
    return false;
  }
};

export function createPasswordHash(
  password: string,
  hashSettings?: TPasswordHash,
) {
  if (
    !password ||
    !hashSettings ||
    typeof password !== "string" ||
    typeof hashSettings !== "object" ||
    !hasOwnProperty(hashSettings, "salt") ||
    !hasOwnProperty(hashSettings, "size") ||
    !hasOwnProperty(hashSettings, "iterations") ||
    typeof hashSettings.size !== "number" ||
    typeof hashSettings.iterations !== "number" ||
    typeof hashSettings.salt !== "string"
  )
    throw new Error("Invalid params.");

  const { size, iterations, salt } = hashSettings;

  let bits = sjcl.misc.pbkdf2(password, salt, iterations);
  bits = bits.slice(0, size / 32);
  const hash = sjcl.codec.hex.fromBits(bits);

  return hash;
}
