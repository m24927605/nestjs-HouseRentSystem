'use strict';

import { Controller, Get, Response, HttpStatus, Param, Body, Post, Request, Patch, Delete } from '@nestjs/common';
import { RentDetailSerice } from '../Services/index';
import { RentDetailDTO } from '../DTO/index';
import * as moment from 'moment';

@Controller('rentDetail')
export class RentDetailController {

    constructor(private readonly rentDetailSerice: RentDetailSerice) { }

    @Get()
    public async getRoles( @Response() res) {
        const rentDetail = await this.rentDetailSerice.findAll();
        return res.status(HttpStatus.OK).json(rentDetail);
    }

    @Get('/find')
    public async findRole( @Response() res) {
        //給定where條件
        let queryCondition = { where: { Name: 'Michael' } };
        const rentDetail = await this.rentDetailSerice.findOne(queryCondition);
        return res.status(HttpStatus.OK).json(rentDetail);
    }

    @Get('/:ID')
    public async getRole( @Response() res, @Param() param) {

        const rentDetail = await this.rentDetailSerice.findById(param.ID);
        return res.status(HttpStatus.OK).json(rentDetail);
    }

    @Post()
    public async createRole( @Response() res, @Body() rentDetailDTO: RentDetailDTO) {
        rentDetailDTO.CreateDate = moment().toDate();
        rentDetailDTO.CreateUser = 'sa';
        const rentDetail = await this.rentDetailSerice.create(rentDetailDTO);
        return res.status(HttpStatus.OK).json(rentDetail);
    }

    @Patch('/:ID')
    public async updateRole( @Param() param, @Response() res, @Body() rentDetailDTO: RentDetailDTO) {
        rentDetailDTO.ModifyDate = moment().toDate();
        rentDetailDTO.ModifyUser = 'sa';
        const rentDetail = await this.rentDetailSerice.update(param.ID, rentDetailDTO);
        return res.status(HttpStatus.OK).json(rentDetail);
    }

    @Delete('/:ID')
    public async deleteRole( @Param() param, @Response() res) {

        const rentDetail = await this.rentDetailSerice.delete(param.ID);
        return res.status(HttpStatus.OK).json(rentDetail);
    }
}