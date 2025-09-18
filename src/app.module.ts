import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { TweetController } from './tweet/tweet.controller';
import { TweetModule } from './tweet/tweet.module';
import { TweetService } from './tweet/tweet.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';

@Module({
  imports: [UsersModule, TweetModule, AuthModule, TypeOrmModule.forRootAsync(
    {
      imports:[], 
      inject:[],
      useFactory: () => ({
        type: 'postgres',
        entities: [User],
        synchronize: true,
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '',
        database: 'nestjs'
      })
    }
  )],
  controllers: [AppController, UsersController, TweetController],
  providers: [AppService, UsersService, TweetService],
})
export class AppModule { }
