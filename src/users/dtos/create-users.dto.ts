import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class createUserDto{
    id:number

    @IsString({message:'name should be sting value'})
    @IsNotEmpty()
    name:string;

    @IsEmail()
    email:string;

    @IsOptional()
    age:number;
}