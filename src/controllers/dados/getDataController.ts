import { Request, Response } from "express";
import { getDataService } from "../../services";
import { handleError } from "../../utils";

const getDataController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = getDataService(+id);
    res.status(200).json(result);
  } catch (error) {
    return handleError(error, res);
  }
};

export { getDataController };
