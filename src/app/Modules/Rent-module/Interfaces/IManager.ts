'use strict';

export interface IManager {
    readonly BackerID: number;
    readonly Name: string;
    readonly Account: string;
    readonly Password: string;
    readonly CreateDate: Date;
    readonly CreateUser: string;
    readonly ModifyDate: Date;
    readonly ModifyUser: string;
}