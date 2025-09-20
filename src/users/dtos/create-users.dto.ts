import { IsEmail, IsNotEmpty, IsString, MaxLength,  } from "class-validator"

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
}