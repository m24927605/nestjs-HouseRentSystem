'use strict';

import { Component, Inject } from '@nestjs/common';
import { UserDetail } from '../Entities/index';
import { IUserDetail, IUserDetailService } from '../Interfaces/index';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Component()
export class UserDetailSerice implements IUserDetailService {
    constructor(
        @InjectRepository(UserDetail)
        private readonly userDetailRepository: Repository<UserDetail>) { }

    public async findAll(): Promise<Array<UserDetail>> {
        return await this.userDetailRepository.find();
    }

    //findOne()可以加入各種option，以下示範常見的where
    //注意findOne() 找到一筆就會立即return data，不會繼續往下找。
    public async findOne(options: Object): Promise<UserDetail | null> {
        return await this.userDetailRepository.findOne(options);
    }

    //restful API很常用。
    public async findById(ID): Promise<UserDetail | null> {
        return await this.userDetailRepository.findOneById(ID);
    }

    public async create(userDetail: IUserDetail): Promise<UserDetail> {
        return await this.userDetailRepository.save(userDetail);
    }

    public async update(ID: number, newValue: IUserDetail): Promise<UserDetail | null> {
        //先找出單筆資料
        let userDetail = await this.userDetailRepository.findOneById(ID);
        //該筆資料不存在
        if (!userDetail.UserID) {
            console.error("userDetail doesn't exist");
        }
        //呼叫feature Model的方法
        await this.userDetailRepository.updateById(ID, newValue);
        return await this.userDetailRepository.findOneById(ID);
    }

    public async delete(ID: number): Promise<number> {
        //成功會回傳1，失敗回傳0
        await this.userDetailRepository.deleteById(ID);
        let userDetail = await this.userDetailRepository.findOneById(ID);
        if (!userDetail) {
            //刪除成功
            return 1;
        }
        else {
            //刪除失敗
            return 0;
        }
    }
}