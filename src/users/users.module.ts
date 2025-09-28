import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from 'src/profile/profile.entity';
import { PaginationQueryDto } from 'src/common/pagination/dto/pagination-query.dto';
import { AuthModule } from 'src/auth/auth.module';
import { HashingProvider } from 'src/auth/provider/hashing.provider';
import { ConfigModule } from '@nestjs/config';
import authConfig from 'src/auth/config/auth.config';
import { JwtModule } from '@nestjs/jwt';

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [
        TypeOrmModule.forFeature([User, Profile]),
        forwardRef(() => AuthModule),
        ConfigModule.forFeature(authConfig),
        JwtModule.registerAsync(authConfig.asProvider())
    ],
    exports: [UsersService]
})
export class UsersModule {

}