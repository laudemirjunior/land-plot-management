const getAllData = "SELECT * FROM dados.dados";

const getData = (id: number) => {
  return {
    text: "SELECT * FROM dados.dados WHERE id = $1",
    values: [id],
  };
};

const createData = (
  nome: string,
  cpf_cnpj: string,
  nome_logradouro: string,
  numero: number,
  complemento: string,
  data_nascimento: Date
) => {
  return {
    text: "INSERT INTO dados.dados (nome, cpf_cnpj, nome_logradouro, numero, complemento, data_nascimento) VALUES ($1, $2, $3, $4, $5, $6)",
    values: [
      nome,
      cpf_cnpj,
      nome_logradouro,
      numero,
      complemento,
      data_nascimento,
    ],
  };
};

const patchData = (key: string, data: any, id: string) => {
  return {
    text: `UPDATE dados.dados SET ${key} = $1 where "id" = ${id}`,
    values: [data[key]],
  };
};

const deleteData = (id: number) => {
  return {
    text: "DELETE FROM dados.dados WHERE id = $1",
    values: [id],
  };
};

export { getAllData, getData, createData, patchData, deleteData };
