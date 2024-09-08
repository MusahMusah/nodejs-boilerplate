import { Request, Response, NextFunction } from 'express';

export const use = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res)).catch(next)
}
