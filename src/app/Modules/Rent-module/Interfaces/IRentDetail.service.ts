'use strict';

import { RentDetail } from '../Entities/index';
import { IRentDetail } from './index';

export interface IRentDetailService {
    findAll(): Promise<Array<IRentDetail>>;
    findById(RoomID: number): Promise<IRentDetail | null>;
    findOne(options: Object): Promise<IRentDetail | null>;
    create(rentDetail: RentDetail): Promise<IRentDetail>;
    update(RoomID: number, newValue: IRentDetail): Promise<IRentDetail | null>;
    delete(RoomID: number): Promise<number>;
}