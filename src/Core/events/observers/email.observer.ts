import { IEmail } from "../../email/entity";

export class EmailObserver {
    public static observers: Array<Function> = [];

    public static subscribe(observer: Function) {
        EmailObserver.observers.push(observer);
    }

    public static unsubscribe(observer: Function) {
        EmailObserver.observers = EmailObserver.observers.filter((obs: Function) => obs !== observer);
    }

    public static async notify(data: IEmail) {
        for await (const observer of EmailObserver.observers) {
            await observer(data);
        }
    }
}
