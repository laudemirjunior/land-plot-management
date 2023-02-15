import { Request, Response } from "express";
import { postDataService } from "../../services/data/postDataService";
import { handleError } from "../../utils";

const postDataController = async (req: Request, res: Response) => {
  try {
    const {
      nome,
      cpf_cnpj,
      nome_logradouro,
      numero,
      complemento,
      data_nascimento,
    } = req.validated;
    await postDataService(
      nome,
      cpf_cnpj,
      nome_logradouro,
      numero,
      complemento,
      data_nascimento
    );
    res.status(201).json({ msg: "created" });
  } catch (error) {
    return handleError(error, res);
  }
};

export { postDataController };
