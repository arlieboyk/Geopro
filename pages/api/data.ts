import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const response = await fetch("http://192.168.1.95:8000/api/userlist/");
      const data = response.json();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
