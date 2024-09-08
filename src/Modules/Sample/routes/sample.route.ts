import { Router } from "express";
import { use } from "../../../Core/middlewares/use.middleware";
import { IndexController } from "../http/controllers/index.controller";

const router = Router();

router.post('/sample/hello-world', use(IndexController.__invoke));

export = router;