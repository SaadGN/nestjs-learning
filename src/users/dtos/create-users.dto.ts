import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class createUserDto{
    @IsNumber()
    id:number

    @IsString({message:'name should be sting value'})
    @IsNotEmpty()
    name:string;

    @IsEmail()
    email:string;

    @IsOptional()
    age:number;
}