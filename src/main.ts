import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConstantKeys } from './modules/shared/config/constant-keys.enum';
import { AzureBusServer } from './modules/shared/transporters/azurebus.server';
import { ValidationPipe } from '@nestjs/common';
import { LoggerService } from './modules/shared/services/logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const publicUrl = process.env.PUBLIC_URL || '';
  const PORT = process.env.PORT || 3000;

  app.setGlobalPrefix(publicUrl);

  app.useGlobalPipes(new ValidationPipe());
  const loggerService = new LoggerService();
  app.useLogger(new LoggerService('Api'));
  app.connectMicroservice({
    strategy: new AzureBusServer({
      url: app.get(ConstantKeys.azureBusUrl),
    }),
  });
  app.startAllMicroservices();
  await app.listen(PORT, () => {
    loggerService.log(`🚀 SERVER RUNNING ON PORT ${PORT}`);
  });
}
bootstrap();
