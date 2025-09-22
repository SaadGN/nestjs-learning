import { IsArray, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class CreateTweetDto{
    @IsNotEmpty()
    @IsString()
    text:string 

    @IsNotEmpty()
    @IsInt()
    userId:number

    @IsOptional()
    @IsArray()
    @IsInt({each:true})
    hashtags?:number[]
}