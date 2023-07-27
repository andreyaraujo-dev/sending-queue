import { Inject, Injectable } from '@nestjs/common';
import { AzureBusClient } from '../shared/transporters/azurebus.client';
import { ConstantKeys } from '../shared/config/constant-keys.enum';

export interface SendQueueOutput {
  status: 'PROCESSING';
}

@Injectable()
export class SendQueueService {
  constructor(
    private readonly azurebusClient: AzureBusClient,
    @Inject(ConstantKeys.queueName)
    private readonly queueName: string,
  ) {}

  async execute(data: any): Promise<SendQueueOutput> {
    this.azurebusClient.emit(this.queueName, data);

    return {
      status: 'PROCESSING',
    };
  }
}
