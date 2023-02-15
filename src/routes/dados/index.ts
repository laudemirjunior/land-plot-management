import { Router } from "express";
import {
  deleteDataController,
  getAllController,
  getDataController,
  patchDataController,
  postDataController,
} from "../../controllers";
import { validateModelMiddleware } from "../../middleware";
import { createDataModal, editDataModal } from "../../models/dataModal";

const dadosRouter = Router();

dadosRouter.get("/", getAllController);

dadosRouter.get("/:id", getDataController);

dadosRouter.post(
  "/",
  validateModelMiddleware(createDataModal),
  postDataController
);

dadosRouter.patch(
  "/:id",
  validateModelMiddleware(editDataModal),
  patchDataController
);

dadosRouter.delete("/:id", deleteDataController);

export { dadosRouter };
