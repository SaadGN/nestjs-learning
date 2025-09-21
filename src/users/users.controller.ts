import { Body, Controller, Get, Post } from '@nestjs/common'
import { UsersService } from './users.service'
import { createUserDto } from './dtos/create-users.dto'

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }


    @Get('')
    getAllUsers() {
        return this.usersService.getAllUsers(); 
    }

    @Post()
    createUsers(@Body() user: createUserDto) {
        this.usersService.createUser(user)
    }





}
