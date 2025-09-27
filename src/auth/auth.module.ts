import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { BcryptProvider } from './provider/bcrypt.provider';
import { HashingProvider } from './provider/hashing.provider';

@Module({
  controllers: [AuthController],
  providers: [AuthService, {
    provide:HashingProvider,
    useClass:BcryptProvider
  }],
  imports:[forwardRef( () => UsersModule)],
  exports:[AuthService,HashingProvider]
})
export class AuthModule {}
