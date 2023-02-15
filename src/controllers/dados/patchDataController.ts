import { Request, Response } from "express";
import pool from "../../connection";
import { patchDado } from "../../repositories/dados";

const patchDataController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const client = await pool.connect();

  Object.keys(data).forEach(async (key) => {
    return await client.query(patchDado(key, data, id));
  });

  client.release();
  res.status(204).json();
};

export { patchDataController };
