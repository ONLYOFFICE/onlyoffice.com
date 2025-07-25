import crypto from "crypto";
import moment from "moment";

export function createAuthToken(pkey: string, machinekey: string): string {
  const now = moment.utc().format("YYYYMMDDHHmmss");

  let authkey = crypto
    .createHmac("sha1", machinekey)
    .update(`${now}\n${pkey}`)
    .digest("base64");

  authkey = authkey.replaceAll("+", "-").replaceAll("/", "_");
  authkey = authkey.slice(0, Math.max(0, authkey.length - 1));

  return `ASC ${pkey}:${now}:${authkey}`;
}
