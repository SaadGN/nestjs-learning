import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { Tweet } from './tweet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { HashtagService } from 'src/hashtag/hashtag.service';
import { Hashtag } from 'src/hashtag/hashtag.entity';

@Injectable()
export class TweetService {

  constructor(
    private readonly userService: UsersService,
    private readonly hashtagService: HashtagService,
    @InjectRepository(Tweet)
    private readonly tweetRepository: Repository<Tweet>
  ) { }
  public async getTweets(userId: number) {
    return await this.tweetRepository.find({
      where: { user: { id: userId } },
      relations: { user: true }
    })
  }


  public async CreateTweet(createTweetDto: CreateTweetDto) {
    let user = await this.userService.FindUserById(createTweetDto.userId);

    if (!user) {
      throw new Error('User not found');
    }

    if (!createTweetDto.hashtags) {
      throw new Error('hashtags not found');
    }
    let hashtags = await this.hashtagService.findHashtags(createTweetDto.hashtags)


    const tweet = this.tweetRepository.create({
      ...createTweetDto, user, hashtags
      // text: createTweetDto.text,
      // user: user,
    });

    return await this.tweetRepository.save(tweet);
  }


}
