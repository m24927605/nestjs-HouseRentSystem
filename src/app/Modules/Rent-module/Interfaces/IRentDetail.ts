'use strict';

export interface IRentDetail {
    readonly RoomID: number;
    readonly RoomNo: number;
    readonly RentStartDate: Date;
    readonly RentEndDate: Date;
    readonly PowerUnitCost: number;
    readonly RentMonthly: number;
    readonly EnterDate: Date;
    readonly LeaveDate: Date;
    readonly Status: string;
    readonly CreateUser: string;
    readonly CreateDate: Date;
    readonly ModifyUser: string;
    readonly ModifyDate: Date;
}