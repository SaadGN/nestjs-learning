import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class createUserDto{
    @IsString({message:'name should be sting value'})
    @IsNotEmpty()
    firstName:string;

    @IsString({message:'name should be sting value'})
    @IsNotEmpty()
    lasttName:string;

    @IsEmail()
    email:string;

    @IsString()
    @IsNotEmpty()
    password:string
}