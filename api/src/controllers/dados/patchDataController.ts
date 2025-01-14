import { Request, Response } from "express"
import { patchDataService } from "../../services"
import { handleError } from "../../utils"

const patchDataController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.validated;
    await patchDataService(id, data);
    res.status(204).json();
  } catch (error) {
    return handleError(error, res);
  }
};

export { patchDataController }

