import { cleanEnv, str, num  } from 'envalid';
import { config } from 'dotenv';
config();

export const env = cleanEnv(process.env, {
    APP_PORT: num(),
    WORKER_PORT: num(),
    DB_DEV_URL: str(),
    DB_LIVE_URL: str(),
    NODE_ENV: str(),
    REDIS_URL: str(),
    VERSION: str(),
    FROM_EMAIL: str(),
    SENDER_NAME: str(),
    SENDER_EMAIL: str(),
    MAILGUN_API_KEY: str(),
    BASE_URL: str(),
});
