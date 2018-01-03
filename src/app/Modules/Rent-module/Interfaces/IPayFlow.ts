'use strict';

export interface IPayFlow {
    readonly ID: number;
    readonly UserID: number;
    readonly PowerQty: number;
    readonly Payment: number;
    readonly TimeOfPayment: Date;
    readonly CreateUser: string;
    readonly CreateDate: Date;
    readonly ModifyUser: string;
    readonly ModifyDate: Date;
}