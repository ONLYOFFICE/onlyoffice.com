import type { NextApiRequest } from "next";

export function getClientIp(req: NextApiRequest): string {
  return (
    (Array.isArray(req.headers["x-forwarded-for"])
      ? req.headers["x-forwarded-for"][0]
      : req.headers["x-forwarded-for"]) ||
    req.socket.remoteAddress ||
    "unknown"
  );
}
