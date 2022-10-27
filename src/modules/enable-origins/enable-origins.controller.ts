import { Controller, Post } from '@nestjs/common';
import {
  EnableOriginsService,
  ResultEnableOrigin,
} from './enable-origins.service';

@Controller('enable-origins')
export class EnableOriginsController {
  constructor(private readonly enableOriginsService: EnableOriginsService) {}

  @Post()
  async enable(): Promise<ResultEnableOrigin> {
    return this.enableOriginsService.execute();
  }
}
