import { FactoryProvider, Global, Module } from '@nestjs/common';
import { ConstantKeys } from './config/constant-keys.enum';
import { LoggerService } from './services/logger/logger.service';
import { SecretService } from './services/secret/secret.service';
import { AzureBusClient } from './transporters/azurebus.client';

const secretProviders: FactoryProvider[] = Object.values(ConstantKeys).map(
  (key: ConstantKeys): FactoryProvider => {
    return {
      inject: [SecretService],
      provide: key,
      useFactory: async (secretService: SecretService): Promise<string> =>
        secretService.fetchEnvSecret(key),
    };
  },
);

@Global()
@Module({
  providers: [LoggerService, SecretService, AzureBusClient, ...secretProviders],
  exports: [LoggerService, AzureBusClient, ...secretProviders],
})
export class SharedModule {}
