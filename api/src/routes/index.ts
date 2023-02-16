import { Router } from "express";
import { dadosRouter } from "./dados";

const router = Router();

router.use("/data", dadosRouter);

export { router };
