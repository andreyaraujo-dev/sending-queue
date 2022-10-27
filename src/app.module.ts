import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnableOriginsModule } from './modules/enable-origins/enable-origins.module';
import { SharedModule } from './modules/shared/shared.module';

@Module({
  imports: [ConfigModule.forRoot(), SharedModule, EnableOriginsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
