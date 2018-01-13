'use strict';

import { IRentDetail } from './index';
import { RentDetailDTO } from '../DTO/index';

export interface IRentDetailService {
    findAll(): Promise<[IRentDetail[], number]>;
    findById(RoomID: number): Promise<IRentDetail | null>;
    findOne(options: Object): Promise<IRentDetail | null>;
    create(rentDetail: RentDetailDTO): Promise<IRentDetail>;
    update(RoomID: number, newValue: RentDetailDTO): Promise<IRentDetail | null>;
    delete(RoomID: number): Promise<number>;
}