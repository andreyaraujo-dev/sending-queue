import { Body, Controller, Post } from '@nestjs/common';
import { SendQueueOutput, SendQueueService } from './send-queue.service';

@Controller('queue')
export class SendQueueController {
  constructor(private readonly sendQueueService: SendQueueService) {}

  @Post()
  async enable(@Body() data: any): Promise<SendQueueOutput> {
    return this.sendQueueService.execute(data);
  }
}
