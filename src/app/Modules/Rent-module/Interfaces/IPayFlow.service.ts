'use strict';

import { PayFlow } from '../Entities/index';
import { IPayFlow } from './index';

export interface IPayFlowService {
    findAll(): Promise<Array<PayFlow>>;
    findById(ID: number): Promise<PayFlow | null>;
    findOne(options: Object): Promise<PayFlow | null>;
    create(payFlow: PayFlow): Promise<PayFlow>;
    update(ID: number, newValue: PayFlow): Promise<PayFlow | null>;
    delete(ID: number): Promise<number>;
}