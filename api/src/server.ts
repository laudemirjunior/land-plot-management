import cors from "cors";
import express, { Router } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import { dadosRouter } from "./routes";

const app = express();

app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const router = Router();

router.use("/data", dadosRouter);

app.use(express.json());

app.use(router);

app.listen(3333, () => "server running on port 3333");
