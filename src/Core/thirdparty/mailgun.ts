import formData from 'form-data';
import Mailgun from 'mailgun.js';
import {env} from "../utils/env";


const mailgun = new Mailgun(formData);

export const sendMail = async (to: string[] | string, subject: string, template: any) => {
    try {
        const mg = mailgun.client({username: 'api', key: env.MAILGUN_API_KEY });

        return mg.messages.create(env.MAILGUN_DOMAIN, {
            from: "Check ID <mailgun@checkid.ng>",
            to: to,
            subject,
            html: template
        });
    }
    catch (e) {
        throw e;
    }

}
