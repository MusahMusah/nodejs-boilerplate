import {env} from "../utils/env";

export const getDBConnectionUrl = (): string | null => {
    switch (env.NODE_ENV)
    {
        case 'production':
            return env.DB_LIVE_URL

        case 'development':
            return env.DB_DEV_URL

        default:
            return null;
    }
}
