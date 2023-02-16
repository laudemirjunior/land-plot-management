import { Request, Response } from "express";
import { getAllService } from "../../services";
import { handleError } from "../../utils";

const getAllController = async (_: Request, res: Response) => {
  try {
    const result = await getAllService();
    res.status(200).json(result);
  } catch (error) {
    return handleError(error, res);
  }
};

export { getAllController };
