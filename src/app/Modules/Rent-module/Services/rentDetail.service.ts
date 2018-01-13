'use strict';

import { Component, Inject } from '@nestjs/common';
import { RentDetail } from '../Entities/index';
import { IRentDetail, IRentDetailService } from '../Interfaces/index';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Component()
export class RentDetailSerice implements IRentDetailService {
    constructor(
        @InjectRepository(RentDetail)
        private readonly rentDetailRepository: Repository<RentDetail>) { }

    public async findAll(): Promise<[IRentDetail[], number]> {
        return await this.rentDetailRepository.findAndCount();
    }

    //findOne()可以加入各種option，以下示範常見的where
    //注意findOne() 找到一筆就會立即return data，不會繼續往下找。
    public async findOne(options: Object): Promise<RentDetail | null> {
        return await this.rentDetailRepository.findOne(options);
    }

    //restful API很常用。
    public async findById(ID): Promise<RentDetail | null> {
        return await this.rentDetailRepository.findOneById(ID);
    }

    public async create(rentDetail: IRentDetail): Promise<RentDetail> {
        return await this.rentDetailRepository.save(rentDetail);
    }

    public async update(ID: number, newValue: IRentDetail): Promise<RentDetail | null> {
        //先找出單筆資料
        let rentDetail = await this.rentDetailRepository.findOneById(ID);
        //該筆資料不存在
        if (!rentDetail.RoomID) {
            console.error("rentDetail doesn't exist");
        }
        //呼叫feature Model的方法
        await this.rentDetailRepository.updateById(ID, newValue);
        return await this.rentDetailRepository.findOneById(ID);
    }

    public async delete(ID: number): Promise<number> {
        //成功會回傳1，失敗回傳0
        await this.rentDetailRepository.deleteById(ID);
        let rentDetail = await this.rentDetailRepository.findOneById(ID);
        if (!rentDetail) {
            //刪除成功
            return 1;
        }
        else {
            //刪除失敗
            return 0;
        }
    }
}