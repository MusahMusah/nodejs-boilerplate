import { Application } from "express";
import { throttle } from "./middlewares/throttle.middleware";
import { PREFIX } from "./config/constants";
import sampleRoute from "../Modules/Sample/routes/sample.route"

export const Register = (app: Application) => {
    app.use([throttle()]);
    app.use(PREFIX + '/sample', sampleRoute);
}