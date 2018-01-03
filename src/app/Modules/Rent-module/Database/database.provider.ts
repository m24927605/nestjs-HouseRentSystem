'use strict';

import { createConnection } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'TypeORMToken',
        useFactory: async () => await createConnection({
            type: 'mssql',
            host: 'localhost',
            port: 1433,
            username: 'sa',
            password: 'Aa123456',
            database: 'Rent',
            entities: [
                __dirname + '/../Entities/*{.ts,.js}'
            ]
        })
    }
]