import { Body, Controller, DefaultValuePipe, Get, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common'
import { UsersService } from './users.service'
import { createUserDto } from './dtos/create-users.dto'
import { GetUserParamDto } from './dtos/get-user-param.dto'
import { UpdateUserDto } from './dtos/update-user.dto'
import { User } from './user.entity'

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
