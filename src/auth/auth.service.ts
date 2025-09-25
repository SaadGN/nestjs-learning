import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { createUserDto } from 'src/users/dtos/create-users.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(@Inject(UsersService)
    private readonly userService: UsersService) { }

    // @Inject(authConfig.KEY)
    // private readonly authConfiguration :ConfigType<typeof authConfig>

    isAuthenticated: Boolean = false
    login(email: string, pswd: string) {

        return `User not exist`
    }
    public async signup(createUserDto: createUserDto) {
        return await this.userService.createUser(createUserDto)
    }
}
