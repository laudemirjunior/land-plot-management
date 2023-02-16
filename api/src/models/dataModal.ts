import * as yup from "yup";

interface IDataModal {
  data_nascimento: Date;
  complemento: string;
  numero: number;
  nome_logradouro: string;
  cpf_cnpj: string;
  nome: string;
}

const createDataModal = yup.object().shape({
  nome: yup.string().required(),
  cpf_cnpj: yup.string().required(),
  nome_logradouro: yup.string().required(),
  numero: yup.number().required(),
  complemento: yup.string().required(),
  data_nascimento: yup.date().required(),
});

const editDataModal = yup.object().shape({
  nome: yup.string(),
  cpf_cnpj: yup.string(),
  nome_logradouro: yup.string(),
  numero: yup.number(),
  complemento: yup.string(),
  data_nascimento: yup.date(),
});

export { createDataModal, editDataModal, IDataModal };
