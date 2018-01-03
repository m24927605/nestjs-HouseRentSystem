'use strict';

import { Manager } from '../Entities/index';
import { IManager } from './index';

export interface IManagerService {
    findAll(): Promise<Array<Manager>>;
    findById(BackerID: number): Promise<Manager | null>;
    findOne(options: Object): Promise<Manager | null>;
    create(manager: Manager): Promise<Manager>;
    update(BackerID: number, newValue: Manager): Promise<Manager | null>;
    delete(BackerID: number): Promise<number>;
}