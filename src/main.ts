import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,         //extra property from req is not provided to controller
    forbidNonWhitelisted:true,         //to throw error if extra property added in request body
    transform:true            // to create req.user instance of userDto
  }))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
