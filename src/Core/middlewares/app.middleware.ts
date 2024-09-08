import express, {Application, NextFunction, Request, Response} from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import cors from "cors";
import {Register} from "../Register";
import { CORS_CONFIG } from "../config/cors";

export const handlers = (app: Application): void => {
    app.use(express.json());
    app.use(cookieParser());
    app.use(express.urlencoded({extended: true}));
    app.use(helmet());
    app.use(cors(CORS_CONFIG));

    app.set('trust proxy', 1);
    app.get('/ip', (request, response) => response.send(request.ip))
    app.get('/x-forwarded-for', (request, response) => response.send(request.headers['x-forwarded-for']))

    Register(app);

    app.use((req, res, next) => {
        res.status(404).json({
            status: 404,
            message: "Sorry, the requested URL was not found."
        });
    });

    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        console.error(err.stack);
        res.status(500).json({
            status: 500,
            message: 'Something broke!'
        });
    });
}
