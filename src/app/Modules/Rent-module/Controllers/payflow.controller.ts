'use strict';

import { Controller, Get, Response, HttpStatus, Param, Body, Post, Request, Patch, Delete } from '@nestjs/common';
import { PayFlowSerice } from '../Services/index';
import { PayFlowDTO } from '../DTO/index';
import * as moment from 'moment';

@Controller('payflow')
export class PayFlowController {

    constructor(private readonly payflowSerice: PayFlowSerice) { }

    @Get()
    public async getPayFlow( @Response() res) {
        const payflow = await this.payflowSerice.findAll();
        return res.status(HttpStatus.OK).json(payflow);
    }

    @Get('/find')
    public async findPayFlow( @Response() res) {
        //給定where條件
        let queryCondition = { where: { Name: 'Michael' } };
        const payflow = await this.payflowSerice.findOne(queryCondition);
        return res.status(HttpStatus.OK).json(payflow);
    }

    @Get('/:ID')
    public async getOnePayFlow( @Response() res, @Param() param) {

        const payflow = await this.payflowSerice.findById(param.ID);
        return res.status(HttpStatus.OK).json(payflow);
    }

    @Post()
    public async createPayFlow( @Response() res, @Body() payflowDTO: PayFlowDTO) {
        payflowDTO.CreateDate = moment().toDate();
        payflowDTO.CreateUser = 'sa';
        const payflow = await this.payflowSerice.create(payflowDTO);
        return res.status(HttpStatus.OK).json(payflow);
    }

    @Patch('/:ID')
    public async updatePayFlow( @Param() param, @Response() res, @Body() payflowDTO: PayFlowDTO) {
        payflowDTO.ModifyDate = moment().toDate();
        payflowDTO.ModifyUser = 'sa';
        const payflow = await this.payflowSerice.update(param.ID, payflowDTO);
        return res.status(HttpStatus.OK).json(payflow);
    }

    @Delete('/:ID')
    public async deletePayFlow( @Param() param, @Response() res) {

        const payflow = await this.payflowSerice.delete(param.ID);
        return res.status(HttpStatus.OK).json(payflow);
    }
}