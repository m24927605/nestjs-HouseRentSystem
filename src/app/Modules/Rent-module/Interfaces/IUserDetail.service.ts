'use strict';

import { UserDetail } from '../Entities/index';
import { IUserDetail } from './index';

export interface IUserDetailService {
    findAll(): Promise<Array<IUserDetail>>;
    findById(UserID: number): Promise<IUserDetail | null>;
    findOne(options: Object): Promise<IUserDetail | null>;
    create(userDetail: UserDetail): Promise<IUserDetail>;
    update(UserID: number, newValue: IUserDetail): Promise<IUserDetail | null>;
    delete(UserID: number): Promise<number>;
}