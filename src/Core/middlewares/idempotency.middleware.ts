import {NextFunction, Response, Request} from "express";

const cache = new Map();

export const preventDuplicateRequests = (req:Request, res:Response, next:NextFunction) => {
    const key = `${req.method}-${req.url}`;

    if (cache.has(key)) {
        const timestamp = cache.get(key);

        if (Date.now() - timestamp < 2000) {
            return res.status(429).send('Too Many Requests');
        }

    }

    cache.set(key, Date.now());

    next();
};
