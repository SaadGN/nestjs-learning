import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { BcryptProvider } from './provider/bcrypt.provider';

@Module({
  controllers: [AuthController],
  providers: [AuthService, BcryptProvider],
  imports:[UsersModule,
    // ConfigModule.forFeature(authConfig)
  ],
  exports:[AuthService]
})
export class AuthModule {}
