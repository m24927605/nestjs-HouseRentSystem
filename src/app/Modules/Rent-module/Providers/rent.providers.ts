'use strict';

import { Connection, Repository } from 'typeorm';
import { Manager, RentDetail, UserDetail, PayFlow } from '../Entities/index';

export const RentProviders = [
    {
        provide: 'ManagerRepository',
        useFactory: (connction: Connection) => connction.getRepository(Manager),
        inject: ['TypeORMToken']
    },
    {
        provide: 'RentDetailRepository',
        useFactory: (connction: Connection) => connction.getRepository(RentDetail),
        inject: ['TypeORMToken']
    },
    {
        provide: 'UserDetailRepository',
        useFactory: (connction: Connection) => connction.getRepository(UserDetail),
        inject: ['TypeORMToken']
    },
    {
        provide: 'PayFlowRepository',
        useFactory: (connction: Connection) => connction.getRepository(PayFlow),
        inject: ['TypeORMToken']
    }
]