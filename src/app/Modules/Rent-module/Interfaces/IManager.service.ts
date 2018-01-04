'use strict';

import { IManager } from './index';
import { ManagerDTO } from '../DTO/index';

export interface IManagerService {
    findAll(): Promise<Array<IManager>>;
    findById(BackerID: number): Promise<IManager | null>;
    findOne(options: Object): Promise<IManager | null>;
    create(manager: ManagerDTO): Promise<IManager>;
    update(BackerID: number, newValue: ManagerDTO): Promise<IManager | null>;
    delete(BackerID: number): Promise<number>;
}