'use strict';

import { Component, Inject } from '@nestjs/common';
import { PayFlow } from '../Entities/index';
import { IPayFlow, IPayFlowService } from '../Interfaces/index';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Component()
export class PayFlowSerice implements IPayFlowService {
    constructor(
        @InjectRepository(PayFlow)
        private readonly payflowRepository: Repository<PayFlow>) { }

    public async findAll(): Promise<[IPayFlow[], number]> {
        return await this.payflowRepository.findAndCount();
    }

    //findOne()可以加入各種option，以下示範常見的where
    //注意findOne() 找到一筆就會立即return data，不會繼續往下找。
    public async findOne(options: Object): Promise<PayFlow | null> {
        return await this.payflowRepository.findOne(options);
    }

    //restful API很常用。
    public async findById(ID): Promise<PayFlow | null> {
        return await this.payflowRepository.findOneById(ID);
    }

    public async create(payflow: IPayFlow): Promise<PayFlow> {
        return await this.payflowRepository.save(payflow);
    }

    public async update(ID: number, newValue: IPayFlow): Promise<PayFlow | null> {
        //先找出單筆資料
        let payflow = await this.payflowRepository.findOneById(ID);
        //該筆資料不存在
        if (!payflow.ID) {
            console.error("payflow doesn't exist");
        }
        //呼叫feature Model的方法
        await this.payflowRepository.updateById(ID, newValue);
        return await this.payflowRepository.findOneById(ID);
    }

    public async delete(ID: number): Promise<number> {
        //成功會回傳1，失敗回傳0
        await this.payflowRepository.deleteById(ID);
        let payflow = await this.payflowRepository.findOneById(ID);
        if (!payflow) {
            //刪除成功
            return 1;
        }
        else {
            //刪除失敗
            return 0;
        }
    }
}