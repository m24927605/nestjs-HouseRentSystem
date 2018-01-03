import { Module } from '@nestjs/common';
import { RentModule } from './Modules/rent-module/rent.module';

@Module({
  modules: [RentModule]
})
export class ApplicationModule { }
