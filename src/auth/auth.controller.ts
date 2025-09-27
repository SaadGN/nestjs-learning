import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { createUserDto } from 'src/users/dtos/create-users.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    // http://localhost:port/auth/login

    @Post('login')
    @HttpCode(HttpStatus.OK)
    public async login(@Body() loginDto:LoginDto) {
        return this.authService.login(loginDto)
    }

    // http://localhost:port/auth/signup
    @Post('signup')
    public async signup(@Body() createUserDto: createUserDto) {
        return await this.authService.signup(createUserDto)
    }
}



