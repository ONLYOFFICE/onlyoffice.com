import type { NextApiRequest, NextApiResponse } from "next";
import { RateLimiterMemory } from "rate-limiter-flexible";
import { getClientIp } from "./getClientIp";

const rateLimiter = new RateLimiterMemory({
  points: 5,
  duration: 60,
});

export async function checkRateLimit(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const ip = getClientIp(req);

  try {
    await rateLimiter.consume(ip);
    return true;
  } catch {
    res.status(429).json({
      status: "error",
      message: "Too many requests. Please try again later.",
    });
    return false;
  }
}
