import { Injectable } from '@nestjs/common';
import { AzureBusClient } from '../shared/transporters/azurebus.client';

export interface ResultEnableOrigin {
  status: 'PROCESSING';
}

@Injectable()
export class EnableOriginsService {
  constructor(private readonly azurebusClient: AzureBusClient) {}

  async execute(): Promise<ResultEnableOrigin> {
    this.azurebusClient.emit('origins-to-enable', {
      message: 'dados para processar',
    });

    return {
      status: 'PROCESSING',
    };
  }
}
