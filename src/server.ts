import express, { Router } from "express";
import { dadosRouter } from "./routes";

const app = express();

const router = Router();

router.use("/dados", dadosRouter);

app.use(express.json());

app.use(router);

app.listen(3333, () => "server running on port 3333");
