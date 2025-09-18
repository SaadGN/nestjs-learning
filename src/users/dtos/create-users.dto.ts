import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength,  } from "class-validator"

export class createUserDto{
    @IsString({message:'name should be sting value'})
    @IsNotEmpty()
    @MaxLength(100)
    firstName:string;

    @IsString({message:'name should be sting value'})
    @IsNotEmpty()
    @MaxLength(100)
    lastName:string;

    @IsEmail()
    @MaxLength(100)
    email:string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    password:string
}