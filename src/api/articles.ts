import { NextApiRequest, NextApiResponse } from "next";
import data from '../../public/data/articles.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data);
}
