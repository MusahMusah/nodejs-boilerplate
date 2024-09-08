import { DAYS_FORMAT } from "../config/constants";


export class CronGuru {
    public static daily(time: string) {
        return time + " * * *";
    }

    public static weekly(time: string, day: string) {
        if (!DAYS_FORMAT.includes(day)) throw new Error('Invalid day format');
        return time + " * * " + day.toUpperCase();
    }

    public static monthly(time: string, day: number) {
        if (day < 1 || day > 31) throw new Error('Invalid day format');
        return time + " " + day + " * *";
    }
}
