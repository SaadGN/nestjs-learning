import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import { PaginationQueryDto } from 'src/common/pagination/dto/pagination-query.dto';

@Controller('tweet')
export class TweetController {
    constructor(private tweetService : TweetService){}

    // http://localhost:3000/tweet/id       
    @Get(':userid')
    public getTweets(
        @Param('userid',ParseIntPipe ) userid:number,
        @Query() paginationQueryDto: PaginationQueryDto
) { 

        return this.tweetService.getTweets(userid,paginationQueryDto)
    }

    @Post()
    public CreateTweet(@Body() tweet:CreateTweetDto){
        return this.tweetService.CreateTweet(tweet)
    }

    @Patch()
    public updateTweet(@Body() tweet:UpdateTweetDto){
        return this.tweetService.updateTweet(tweet)
    }

    @Delete(':id')
    public deleteTweet(@Param('id',ParseIntPipe) id:number){
        return this.tweetService.deleteTweet(id)
    }
}
