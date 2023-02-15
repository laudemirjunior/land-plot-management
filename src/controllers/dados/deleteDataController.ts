import { Request, Response } from "express";
import { deleteDataService } from "../../services";
import { handleError } from "../../utils";

const deleteDataController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteDataService(+id);
    res.status(204).json();
  } catch (error) {
    return handleError(error, res);
  }
};

export { deleteDataController };
