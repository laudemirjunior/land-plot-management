export interface PropLegacy {
  id: string;
  nome: string;
  cpf_cnpj: string;
  nome_logradouro: string;
  numero: number;
  complemento: string;
  data_nascimento: Date;
}

export interface PropsData {
  id?: string;
  nome: string;
  cpf_cnpj: string;
  nome_logradouro: string;
  numero: number;
  complemento: string;
  data_nascimento: Date;
}

export interface PropsGetAllDataRequest {
  data: PropsData;
  legacy: PropLegacy;
}
