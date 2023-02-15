import { Router } from "express";
import {
  deleteDataController,
  getAllController,
  getDataController,
  patchDataController,
  postDataController,
} from "../../controllers";

const dadosRouter = Router();

dadosRouter.get("/", getAllController);

dadosRouter.get("/:id", getDataController);

dadosRouter.post("/", postDataController);

dadosRouter.patch("/:id", patchDataController);

dadosRouter.delete("/:id", deleteDataController);

export { dadosRouter };
