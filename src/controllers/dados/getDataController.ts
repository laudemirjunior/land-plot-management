import { Request, Response } from "express";
import pool from "../../connection";
import { getOne } from "../../repositories/dados";

const getDataController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const client = await pool.connect();
  const result = await client.query(getOne(+id));
  client.release();
  return res.json(...result.rows);
};

export { getDataController };
