import { rateLimit } from 'express-rate-limit';

export const throttle = (limit:number = 60, timeFrameInMinutes: number = 1) => {
    return rateLimit({
        windowMs: timeFrameInMinutes * 60 * 1000,
        max: limit,
        message: {
            status: 429,
            message: 'Too many request'
        }
    })
}
