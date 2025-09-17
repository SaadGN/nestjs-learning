import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TweetService } from './tweet.service';

@Controller('tweet')
export class TweetController {
    constructor(private tweetService : TweetService){}

    // http://localhost:3000/tweet/id       
    @Get(':userid')
    public getTweets(@Param('userid',ParseIntPipe ) userid:number ) { 
        return this.tweetService.getTweets(userid)
    }
}
