import { Module } from '@nestjs/common';
import { EnableOriginsController } from './enable-origins.controller';
import { EnableOriginsService } from './enable-origins.service';

@Module({
  providers: [EnableOriginsService],
  controllers: [EnableOriginsController],
})
export class EnableOriginsModule {}
