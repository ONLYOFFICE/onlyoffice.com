import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.query.secret !== process.env.REVALIDATE_SECRET) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  
    try {
      const path = req.query.path || '/events';
      await res.revalidate(path as string);
  
      return res.json({ revalidated: true, path });
    } catch (err) {
      return res.status(500).json({ error: 'Error revalidating', message: (err as Error).message });
    }
  }