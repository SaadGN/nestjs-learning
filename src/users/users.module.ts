import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from 'src/profile/profile.entity';
import { PaginationQueryDto } from 'src/common/pagination/dto/pagination-query.dto';
import { AuthModule } from 'src/auth/auth.module';
import { HashingProvider } from 'src/auth/provider/hashing.provider';

@Module({
    controllers:[UsersController],
    providers:[UsersService],
    imports :[TypeOrmModule.forFeature([User,Profile]),
    forwardRef( () => AuthModule)
    ],
    exports:[UsersService]
})
export class UsersModule {
    
}