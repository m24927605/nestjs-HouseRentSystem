'use strict';

import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../Modules/rent-module/Database/database.module';
import { RentProviders } from '../rent-module/Providers/rent.providers';
import { ManagerSerice, PayFlowSerice, RentDetailSerice, UserDetailSerice } from '../Rent-module/Services/index';
import {ManagerController,PayFlowController,RentDetailController,UserDetailController} from '../Rent-module/Controllers/index';
@Module({
    modules: [DatabaseModule],
    controllers: [
        ManagerController,
        PayFlowController,
        RentDetailController,
        UserDetailController
    ],
    components: [
        ManagerSerice,
        PayFlowSerice,
        RentDetailSerice,
        UserDetailSerice,
        ...RentProviders
    ]
})

export class RentModule { }