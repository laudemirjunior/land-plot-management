import pool from "../../connection";
import { createData } from "../../repositories";

const postDataService = async (
  nome: string,
  cpf_cnpj: string,
  nome_logradouro: string,
  numero: number,
  complemento: string,
  data_nascimento: Date
) => {
  const client = await pool.connect();
  await client.query(
    createData(
      nome,
      cpf_cnpj,
      nome_logradouro,
      numero,
      complemento,
      data_nascimento
    )
  );
  client.release();
};

export { postDataService };
