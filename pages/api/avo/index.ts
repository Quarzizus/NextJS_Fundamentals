import { NextApiRequest, NextApiResponse } from "next";
import Database from "../../../database/db";

const allAvos = async (_req: NextApiRequest, res: NextApiResponse) => {
  const db = new Database();
  const allData = await db.getAll();
  const length = allData.length;

  res.status(200).json({ length: length, data: allData });
};

export default allAvos;
