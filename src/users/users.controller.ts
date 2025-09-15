import { Controller, Get, Param, Post, Query } from '@nestjs/common'
import {UsersService} from './users.service'

@Controller('users')
export class UsersController {
    @Get()
    getUsers(@Query() query:any){
        // getUsers(@Query('name') query:any){               for single param
    const userService = new UsersService
    console.log(query)
    // console.log(query.gender)
    return userService.getAllUsers()
}
@Post()
    createUsers(){
        const user = {id:3,name:"doe" , age : 18}
        const userService = new UsersService
        userService.createUser(user)
        return 'new user created'
    }

    @Get(':id')
    getUsersbyId(@Param('id') id:any){
        const userService = new UsersService
        return userService.getUserbyId(+id)
    }
    // getUsersbyId(@Param('id') param:any){               ******read id from parameter
    //     console.log(param)
    // }

}
