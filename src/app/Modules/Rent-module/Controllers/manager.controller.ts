'use strict';

import { Controller, Get, Response, HttpStatus, Param, Body, Post, Request, Patch, Delete } from '@nestjs/common';
import { ManagerSerice } from '../Services/index';
import { ManagerDTO } from '../DTO/index';
import * as moment from 'moment';

@Controller('manager')
export class ManagerController {

    constructor(private readonly managerSerice: ManagerSerice) { }

    @Get()
    public async getManager( @Response() res) {
        const manager = await this.managerSerice.findAll();
        return res.status(HttpStatus.OK).json(manager);
    }

    @Get('/find')
    public async findManager( @Response() res) {
        //給定where條件
        let queryCondition = { where: { Name: 'Michael' } };
        const manager = await this.managerSerice.findOne(queryCondition);
        return res.status(HttpStatus.OK).json(manager);
    }

    @Get('/:ID')
    public async getOneManager( @Response() res, @Param() param) {

        const manager = await this.managerSerice.findById(param.ID);
        return res.status(HttpStatus.OK).json(manager);
    }

    @Post()
    public async createManager( @Response() res, @Body() managerDTO: ManagerDTO) {
        managerDTO.CreateDate = moment().toDate();
        managerDTO.CreateUser = 'sa';
        const manager = await this.managerSerice.create(managerDTO);
        return res.status(HttpStatus.OK).json(manager);
    }

    @Patch('/:ID')
    public async updateManager( @Param() param, @Response() res, @Body() managerDTO: ManagerDTO) {
        managerDTO.ModifyDate = moment().toDate();
        managerDTO.ModifyUser = 'sa';
        const manager = await this.managerSerice.update(param.ID, managerDTO);
        return res.status(HttpStatus.OK).json(manager);
    }

    @Delete('/:ID')
    public async deleteManager( @Param() param, @Response() res) {

        const manager = await this.managerSerice.delete(param.ID);
        return res.status(HttpStatus.OK).json(manager);
    }
}