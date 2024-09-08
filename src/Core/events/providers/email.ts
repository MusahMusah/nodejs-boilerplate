import { argProps, IEmail } from "../../email/entity";
import {sendMail} from "../../thirdparty/mailgun";
import { MessagesSendResult } from "mailgun.js";

export class EmailProvider {
    private static temp = (arg: argProps) => require(`../../email/templates/${arg.template}`)(arg.data);
    
    public static async send(data: IEmail): Promise<MessagesSendResult | undefined> {
        const content = EmailProvider.temp({ template: data.template, data: data.data });

        return await sendMail(data.to, data.subject, content);
    }
}
