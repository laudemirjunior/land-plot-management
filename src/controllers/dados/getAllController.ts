import { Request, Response } from "express";
import pool from "../../connection";
import { getAll } from "../../repositories/dados";

const getAllController = async (_: Request, res: Response) => {
  const client = await pool.connect();
  const result = await client.query(getAll);
  res.status(200).json(result.rows);
  client.release();
};

export { getAllController };
