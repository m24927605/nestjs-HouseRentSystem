'use strict';

export interface IUserDetail {
    readonly UserID: number;
    readonly RoomID: number;
    readonly UserName: string;
    readonly Birth: Date;
    readonly IDCardNo: string;
    readonly Phone: string;
    readonly ContacterPhone: string;
    readonly Career: string;
    readonly Address: string;
    readonly Email: string;
    readonly LineID: string;
    readonly CreateUser: string;
    readonly CreateDate: Date;
    readonly ModifyUser: string;
    readonly ModifyDate: Date;
}