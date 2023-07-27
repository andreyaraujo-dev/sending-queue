import { Module } from '@nestjs/common';
import { SendQueueController } from './send-queue.controller';
import { SendQueueService } from './send-queue.service';

@Module({
  providers: [SendQueueService],
  controllers: [SendQueueController],
})
export class SendQueueModule {}
