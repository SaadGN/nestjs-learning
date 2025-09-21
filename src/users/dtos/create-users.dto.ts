import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength,  } from "class-validator"
import { CreateProfileDto } from "src/profile/dto/create-profile.dto";

export class createUserDto{
    

    @IsNotEmpty()
    @IsEmail()
    @MaxLength(100)
    email:string;

    @IsNotEmpty()
    @MaxLength(30)
    username:string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    password:string

    @IsOptional()
    profile?:CreateProfileDto 
}