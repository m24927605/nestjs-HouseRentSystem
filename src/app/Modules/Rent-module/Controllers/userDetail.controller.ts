'use strict';

import { Controller, Get, Response, HttpStatus, Param, Body, Post, Request, Patch, Delete } from '@nestjs/common';
import { UserDetailSerice } from '../Services/index';
import { UserDetailDTO } from '../DTO/index';
import * as moment from 'moment';

@Controller('userDetail')
export class UserDetailController {

    constructor(private readonly userDetailSerice: UserDetailSerice) { }

    @Get()
    public async getRoles( @Response() res) {
        const userDetail = await this.userDetailSerice.findAll();
        return res.status(HttpStatus.OK).json(userDetail);
    }

    @Get('/find')
    public async findRole( @Response() res) {
        //給定where條件
        let queryCondition = { where: { Name: 'Michael' } };
        const userDetail = await this.userDetailSerice.findOne(queryCondition);
        return res.status(HttpStatus.OK).json(userDetail);
    }

    @Get('/:ID')
    public async getRole( @Response() res, @Param() param) {

        const userDetail = await this.userDetailSerice.findById(param.ID);
        return res.status(HttpStatus.OK).json(userDetail);
    }

    @Post()
    public async createRole( @Response() res, @Body() userDetailDTO: UserDetailDTO) {
        userDetailDTO.CreateDate = moment().toDate();
        userDetailDTO.CreateUser = 'sa';
        const userDetail = await this.userDetailSerice.create(userDetailDTO);
        return res.status(HttpStatus.OK).json(userDetail);
    }

    @Patch('/:ID')
    public async updateRole( @Param() param, @Response() res, @Body() userDetailDTO: UserDetailDTO) {
        userDetailDTO.ModifyDate = moment().toDate();
        userDetailDTO.ModifyUser = 'sa';
        const userDetail = await this.userDetailSerice.update(param.ID, userDetailDTO);
        return res.status(HttpStatus.OK).json(userDetail);
    }

    @Delete('/:ID')
    public async deleteRole( @Param() param, @Response() res) {

        const userDetail = await this.userDetailSerice.delete(param.ID);
        return res.status(HttpStatus.OK).json(userDetail);
    }
}