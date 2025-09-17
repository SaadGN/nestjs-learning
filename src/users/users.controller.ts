import { Body, Controller, DefaultValuePipe, Get, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common'
import { UsersService } from './users.service'
import { createUserDto } from './dtos/create-users.dto'
import { GetUserParamDto } from './dtos/get-user-param.dto'
import { UpdateUserDto } from './dtos/update-user.dto'

@Controller('users')
export class UsersController {


    constructor(private usersService:UsersService) {

    }


    // @Get()
    // getUsers(@Query() query:any){
    //     // getUsers(@Query('name') query:any){               for single param
    // const userService = new UsersService
    // console.log(query)
    // // console.log(query.gender)
    // return userService.getAllUsers()

@Get('')
    getAllUsers(
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
        @Param() param: GetUserParamDto) {
        // console.log(limit, page)

        console.log(param)
        return this.usersService.getAllUsers()
    }


    @Get(':isMarried')
    getUsers(
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
        @Param() param: GetUserParamDto) {
        // console.log(limit, page)

        console.log(param)
        return this.usersService.getAllUsers()
    }


    @Post()
    createUsers(@Body() user: createUserDto) {
        console.log(user instanceof createUserDto)
        return `new user is created`
    }

    // @Get(':id')
    // getUsersbyId(@Param('id', ParseIntPipe) id: any) {
    //     console.log(typeof id, id)
    //     return this.usersService.getUserbyId(id)
    // }
    // getUsersbyId(@Param('id') param:any){               ******read id from parameter
    //     console.log(param)
    // }

    @Patch()
    updateUser(@Body() user:UpdateUserDto){
        console.log(user)
        return `user updated successfuly`
    }

}
