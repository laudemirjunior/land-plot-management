import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";

const validateModelMiddleware =
  (shape: AnySchema | any) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = await shape.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });

      req.validated = validated;

      return next();
    } catch (error: any) {
      return res.status(400).json({ msg: error.errors[0] });
    }
  };

export { validateModelMiddleware };
