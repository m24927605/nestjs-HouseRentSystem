'use strict';

import { IPayFlow } from './index';
import { PayFlowDTO } from '../DTO/index';

export interface IPayFlowService {
    findAll(): Promise<Array<IPayFlow>>;
    findById(ID: number): Promise<IPayFlow | null>;
    findOne(options: Object): Promise<IPayFlow | null>;
    create(payFlow: PayFlowDTO): Promise<IPayFlow>;
    update(ID: number, newValue: PayFlowDTO): Promise<IPayFlow | null>;
    delete(ID: number): Promise<number>;
}