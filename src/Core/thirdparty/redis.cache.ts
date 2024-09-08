import type {RedisClientType} from 'redis'
import {createClient} from 'redis';
import { env } from '../utils/env';

export class RedisCache {
    private cache: RedisClientType;

    constructor() {
        this.cache = createClient({ url: env.REDIS_URL });
        this.cache.on('error', (err) => console.log('Redis Client Error', err));
        this.cache.connect().then(r => console.log('connected'));
    }

    public async set(key: string, value: any) {
        return this.cache.set(key, JSON.stringify(value), {
            EX: 60 * 60 * 24 * 7
        });
    }

    public async get(key: string) {
        try {
            const result = await this.cache.get(key);
            if (result) {
                return JSON.parse(result);
            }
            return null;
        } catch (e) {
            console.log(e);
        }
    }

    public async del(key: string) {
        return await this.cache.del(key);
    }

    public async flush() {
        return await this.cache.flushAll();
    }
}
