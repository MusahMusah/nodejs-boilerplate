import { Response } from 'express';

export class Cookies {
    private static cookie = 'token';

    static set(res: Response, refreshToken: string | null) {
        //create secure cookies with refresh token
        res.cookie(Cookies.cookie, refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
        });
    }

    static remove(res: Response) {
        res.clearCookie(Cookies.cookie, {httpOnly:true, sameSite:'none', secure:true});
    }
}
