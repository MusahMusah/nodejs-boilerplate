import { cleanEnv, str, num  } from 'envalid';
import { config } from 'dotenv';
config();

export const env = cleanEnv(process.env, {
    APP_NAME: str(),
    APP_PORT: num(),
    DB_DEV_URL: str(),
    DB_LIVE_URL: str(),
    NODE_ENV: str(),
    WORKER_PORT: num(),
    REDIS_URL: str(),
    FROM_EMAIL: str(),
    // MAILGUN_API_KEY: str(),
    // MAILGUN_DOMAIN: str(),
});
