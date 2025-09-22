import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { CreateTweetDto } from './dto/create-tweet.dto';

@Controller('tweet')
export class TweetController {
    constructor(private tweetService : TweetService){}

    // http://localhost:3000/tweet/id       
    @Get(':userid')
    public getTweets(@Param('userid',ParseIntPipe ) userid:number ) { 
        return this.tweetService.getTweets(userid)
    }

    @Post()
    public CreateTweet(@Body() tweet:CreateTweetDto){
        return this.tweetService.CreateTweet(tweet)
    }
}
