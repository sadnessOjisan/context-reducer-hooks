import { NextApiRequest, NextApiResponse } from "next";

export default async (_: NextApiRequest, response: NextApiResponse) => {
  const id = (Math.random() * 100).toFixed(0);
  response.json({ id, name: `太郎_v${id}` });
};
