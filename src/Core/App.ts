import express, { Application } from "express";
import { MongoMemoryServer } from "mongodb-memory-server";
import { Server } from "http";
import mongoose from "mongoose";
import { config } from 'dotenv';
import { getDBConnectionUrl } from "./config/db";
import { env } from "./utils/env";
import detectPort from 'detect-port';
import { handlers } from "./middlewares/app.middleware";
import AsyncLock from "async-lock";

config();

export class App {
    public static readonly app: Application = express();
    public static session: mongoose.ClientSession;
    private static mongoMemory: MongoMemoryServer;
    private static server: Server;
    private static uri = getDBConnectionUrl();
    public static readonly AsyncLock = new AsyncLock({ timeout: 5000, maxExecutionTime: 3000 });

    public static async init(isWorker = false, port = env.WORKER_PORT): Promise<void> {
        if (isWorker) {
            detectPort(Number(port)).then(async (availablePort) => {
                if (availablePort === Number(port)) {
                    await App.initMongoDB(isWorker, port);
                    handlers(App.app);
                }
                else console.log('port is not available');
            })
        }
        else {
            await App.initMongoDB(isWorker, port);
            handlers(App.app);
        }
    }

    private static async initMongoDB(isWorker: boolean = false, port: number): Promise<void> {
        if (App.uri === null) {
            App.mongoMemory = await MongoMemoryServer.create();
            App.uri = App.mongoMemory.getUri();
        }

        // make the connection!!!
        mongoose.set('strictQuery', false);
        mongoose.connect(App.uri).then(() => {
            try {
                const PORT = isWorker ? port : env.APP_PORT;
                App.server = App.app.listen(PORT, async () => {
                    App.session = await mongoose.startSession();
                    console.log('server running on port:' + PORT + ' and on ' + env.NODE_ENV + ' mode');
                });
            }
            catch (e) {
                console.log(e);
            }
        });


        //close the connection when the node process ends
        process.on('SIGINT', () => {
            mongoose.connection.close(true).then(() => {
                process.exit(0);
            });
        });
    }

    public static async stopServer(): Promise<void> {
        App.server.close();
        return mongoose.disconnect();
    }

    public static async dropDatabase(): Promise<void> {
        if (process.env.NODE_ENV === 'test') {
            if (App.mongoMemory) {
                await mongoose.connection.dropDatabase()
                await mongoose.connection.close()
                await App.mongoMemory.stop();
            }
        }
    }

    public static async dropCollections(): Promise<void> {
        if (process.env.NODE_ENV === 'test') {
            if (this.mongoMemory && mongoose.connection.db) {
                const collections = await mongoose.connection.db.collections();
                for (let collection of collections) {
                    await mongoose.connection.db.dropCollection(collection.collectionName)
                }
            }
        }
    }
}