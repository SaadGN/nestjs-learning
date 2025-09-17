import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}

    @Post()
    login (@Body() user : {email:string,pswd:string} ){
       return  this.authService.login(user.email,user.pswd)
    }
}

    
    
