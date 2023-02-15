import { Request, Response, Router } from "express";
import pool from "../../connection";
import {
  createDado,
  deleteDado,
  getAll,
  getOne,
  patchDado,
} from "../../repositories/dados";

const dadosRouter = Router();

dadosRouter.get("/", async (req: Request, res: Response) => {
  const client = await pool.connect();
  const result = await client.query(getAll);
  client.release();
  return res.json(result.rows);
});

dadosRouter.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const client = await pool.connect();
  const result = await client.query(getOne(+id));
  client.release();
  return res.json(...result.rows);
});

dadosRouter.post("/", async (req: Request, res: Response) => {
  const {
    nome,
    cpf_cnpj,
    nome_logradouro,
    numero,
    complemento,
    data_nascimento,
  } = req.body;
  const client = await pool.connect();
  const result = await client.query(
    createDado(
      nome,
      cpf_cnpj,
      nome_logradouro,
      numero,
      complemento,
      data_nascimento
    )
  );
  client.release();
  return res.status(201).json({ msg: "created" });
});

dadosRouter.patch("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const client = await pool.connect();

  Object.keys(data).forEach(async (key) => {
    return await client.query(patchDado(key, data, id));
  });

  client.release();
  return res.status(204).json();
});

dadosRouter.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const client = await pool.connect();

  await client.query(deleteDado(+id));

  client.release();
  return res.status(204).json();
});

export { dadosRouter };
