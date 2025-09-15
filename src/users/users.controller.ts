import { Controller, Get, Post } from '@nestjs/common'
import {UsersService} from './users.service'

@Controller('users')
export class UsersController {
    @Get()
    getUsers(){
    const userService = new UsersService
    return userService.getAllUsers()
}
@Post()
    createUsers(){
        const user = {id:3,name:"doe" , age : 18}
        const userService = new UsersService
        userService.createUser(user)
        return 'new user created'
    }

}
