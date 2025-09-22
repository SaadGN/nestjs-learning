import { Module } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { TweetController } from './tweet.controller';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweet } from './tweet.entity';

@Module({
  controllers:[TweetController],
  providers: [TweetService],
  imports:[UsersModule , TypeOrmModule.forFeature([Tweet])],
  exports:[TweetService]
})
export class TweetModule {}
