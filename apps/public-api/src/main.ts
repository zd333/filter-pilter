/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { AppModule } from './app/app.module';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

const DEFAULT_PORT = 3333;

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  const port = process.env.PORT || DEFAULT_PORT;

  app.setGlobalPrefix(globalPrefix);

  await app.listen(port, () => {
    Logger.log(`Listening at http://localhost:${port}/${globalPrefix}`);
  });
}

bootstrap();
