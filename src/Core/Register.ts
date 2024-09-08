import { Application } from "express";
import { throttle } from "./middlewares/throttle.middleware";

export const Register = (app: Application) => {
    app.use([throttle()]);
}