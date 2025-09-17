import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TweetService {
    constructor(private readonly userService :UsersService){}
    tweets: {text:String,userId:Number}[]=
    [
        {text:"1st tweet",userId:1},
        {text:"2nd tweet",userId:2},
        {text:"3rd tweet",userId:3}
    ]

    getTweets(userId:Number){
        const users = this.userService.getUserbyId(userId)
        const tweets= this.tweets.filter(t => t.userId ===userId);
        if (!users) {
      return []; 
    }
        const response =tweets.map(t => { return {text:t.text,name:users.name} })
        return response;
    }
    
    
}
