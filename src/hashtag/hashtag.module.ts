import { Module } from '@nestjs/common';
import { HashtagService } from './hashtag.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hashtag } from './hashtag.entity';
import { HashtagController } from './hashtag.controller';

@Module({
  controllers:[HashtagController],
  providers: [HashtagService],
  exports:[HashtagService],
  imports:[TypeOrmModule.forFeature([Hashtag])]
})
export class HashtagModule {}
