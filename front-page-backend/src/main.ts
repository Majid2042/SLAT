import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {PrismaService} from './frontpage/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);
  await app.listen(4000);
}
bootstrap();

