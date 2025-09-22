import { IsInt, IsNotEmpty, IsString } from "class-validator";


export class CreateTweetDto{
    @IsNotEmpty()
    @IsString()
    text:string 

    @IsNotEmpty()
    @IsInt()
    userId:number
}