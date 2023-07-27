import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SendQueueModule } from './modules/send-queue/send-queue.module';
import { SharedModule } from './modules/shared/shared.module';

@Module({
  imports: [ConfigModule.forRoot(), SharedModule, SendQueueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
