'use strict';

import { IUserDetail } from './index';
import { UserDetailDTO } from '../DTO/index';

export interface IUserDetailService {
    findAll(): Promise<[IUserDetail[], number]>;
    findById(UserID: number): Promise<IUserDetail | null>;
    findOne(options: Object): Promise<IUserDetail | null>;
    create(userDetail: UserDetailDTO): Promise<IUserDetail>;
    update(UserID: number, newValue: UserDetailDTO): Promise<IUserDetail | null>;
    delete(UserID: number): Promise<number>;
}