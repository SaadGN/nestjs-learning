import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { TweetController } from './tweet/tweet.controller';
import { TweetModule } from './tweet/tweet.module';

@Module({
  imports: [UsersModule, TweetModule],
  controllers: [AppController, UsersController, TweetController],
  providers: [AppService ,UsersService],
})
export class AppModule {}
