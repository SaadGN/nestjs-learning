import { forwardRef, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import type { ConfigType } from '@nestjs/config';
import { createUserDto } from 'src/users/dtos/create-users.dto';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';
import { HashingProvider } from './provider/hashing.provider';
import { response } from 'express';
import  authConfig from './config/auth.config';

@Injectable()
export class AuthService {

    constructor(

        @Inject(forwardRef(() => UsersService))
        private readonly userService: UsersService,

        private readonly hashingProvider: HashingProvider,

        @Inject(authConfig.KEY)
        private readonly authConfiguration :ConfigType<typeof authConfig>,

    ){}

    isAuthenticated: Boolean = false
    public async login(loginDto: LoginDto) {
        let user = await this.userService.findUserByUsername(loginDto.username)

        //if user available then compare password
        let isEqual:Boolean = false;
        isEqual = await this.hashingProvider.comparePassword(loginDto.password,user.password)

        if(!isEqual){
            throw new UnauthorizedException('Incorrect password')
        }

        // send the response
        return {
            data:user,
            success:true,
            message:"User loged-in successfully"
        }

    }



    public async signup(createUserDto: createUserDto) {
        return await this.userService.createUser(createUserDto)
    }
}
