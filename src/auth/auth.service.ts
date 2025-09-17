import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    
    constructor(@Inject(forwardRef( () => UsersService)) private readonly userService:UsersService){}

    isAuthenticated:Boolean=false
    login (email:string,pswd:string){
        const user = this.userService.users.find(u => u.email ===email &&  u.pswd===pswd)
        if(user){
            this.isAuthenticated=true
                return `my token string`
        }
        return `User not exist`
    }
}
