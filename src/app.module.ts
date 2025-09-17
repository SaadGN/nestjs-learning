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

@Module({
  imports: [UsersModule, TweetModule, AuthModule],
  controllers: [AppController, UsersController, TweetController],
  providers: [AppService ,UsersService,TweetService],
})
export class AppModule {}
