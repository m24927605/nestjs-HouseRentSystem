'use strict';

import { Component, Inject } from '@nestjs/common';
import { Manager } from '../Entities/index';
import { IManager, IManagerService } from '../Interfaces/index';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Component()
export class ManagerSerice implements IManagerService {
    constructor(
        @InjectRepository(Manager)
        private readonly managerRepository: Repository<Manager>) { }

    public async findAll(): Promise<Array<Manager>> {
        return await this.managerRepository.find();
    }

    //findOne()可以加入各種option，以下示範常見的where
    //注意findOne() 找到一筆就會立即return data，不會繼續往下找。
    public async findOne(options: Object): Promise<Manager | null> {
        return await this.managerRepository.findOne(options);
    }

    //restful API很常用。
    public async findById(BackerID): Promise<Manager | null> {
        return await this.managerRepository.findOneById(BackerID);
    }

    public async create(manager: IManager): Promise<Manager> {
        return await this.managerRepository.save(manager);
    }

    public async update(ID: number, newValue: IManager): Promise<Manager | null> {
        //先找出單筆資料
        let manager = await this.managerRepository.findOneById(ID);
        //該筆資料不存在
        if (!manager.BackerID) {
            console.error("manager doesn't exist");
        }
        //呼叫feature Model的方法
        await this.managerRepository.updateById(ID, newValue);
        return await this.managerRepository.findOneById(ID);
    }

    public async delete(ID: number): Promise<number> {
        //成功會回傳1，失敗回傳0
        await this.managerRepository.deleteById(ID);
        let manager = await this.managerRepository.findOneById(ID);
        if (!manager) {
            //刪除成功
            return 1;
        }
        else {
            //刪除失敗
            return 0;
        }
    }
}