import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query, ValidationPipe } from '@nestjs/common'
import { UsersService } from './users.service'
import { createUserDto } from './dtos/create-users.dto'

@Controller('users')
export class UsersController {
    usersService: UsersService
    constructor() {
        this.usersService = new UsersService
    }


    // @Get()
    // getUsers(@Query() query:any){
    //     // getUsers(@Query('name') query:any){               for single param
    // const userService = new UsersService
    // console.log(query)
    // // console.log(query.gender)
    // return userService.getAllUsers()

    @Get()
    getUsers(@Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number) {
        console.log(limit, page)
        return this.usersService.getAllUsers()
    }
    @Post()
    createUsers(@Body() user: createUserDto) {
        console.log(user instanceof createUserDto)
        return `new user is created`
    }

    @Get(':id')
    getUsersbyId(@Param('id', ParseIntPipe) id: any) {
        console.log(typeof id, id)
        return this.usersService.getUserbyId(id)
    }
    // getUsersbyId(@Param('id') param:any){               ******read id from parameter
    //     console.log(param)
    // }

}
