import {  IsOptional, IsString, MaxLength,  } from "class-validator"

export class CreateProfileDto{
    @IsString({message:'name should be sting value'})
        
        @MaxLength(100)
        @IsOptional()
        firstName?:string;
    
        @IsString({message:'name should be sting value'})
        @MaxLength(100)
        @IsOptional()
        lastName?:string;
}