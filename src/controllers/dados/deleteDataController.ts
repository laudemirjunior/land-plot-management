import { Request, Response } from "express";
import pool from "../../connection";
import { deleteDado } from "../../repositories/dados";

const deleteDataController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const client = await pool.connect();

  await client.query(deleteDado(+id));

  client.release();
  return res.status(204).json();
};

export { deleteDataController };
