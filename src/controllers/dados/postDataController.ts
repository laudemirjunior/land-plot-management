import { Request, Response } from "express";
import pool from "../../connection";
import { createDado } from "../../repositories/dados";

const postDataController = async (req: Request, res: Response) => {
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
  res.status(201).json({ msg: "created" });
};

export { postDataController };
