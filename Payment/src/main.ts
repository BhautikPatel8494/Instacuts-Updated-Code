import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { MainModule } from './main.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(MainModule);
  await app.listen(process.env.PORT, () => {
    console.log("Server Stated 3007");
  });
}
bootstrap();
