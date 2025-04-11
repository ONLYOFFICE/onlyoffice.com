import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    const path = req.query.path;

    if (typeof path !== "string") {
      return res.status(400).json({ message: "Invalid path" });
    }

    await res.revalidate(path);

    return res.json({ revalidated: true, path });
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Error revalidating", message: (err as Error).message });
  }
}
