import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common'
import { UsersService } from './users.service'
import { createUserDto } from './dtos/create-users.dto'
import { AuthorizeGuard } from 'src/auth/guards/authorize.guard';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }


    @Get('')
    getAllUsers() {
        return this.usersService.getAllUsers(); 
    }

    @UseGuards(AuthorizeGuard)
    @Get(':id')
    getUserById(@Param('id',ParseIntPipe) id:number) {
        return this.usersService.FindUserById(id); 
    }

    @Post()
    createUsers(@Body() user: createUserDto) {
        return this.usersService.createUser(user)
    }

    @Delete(':id')
    public deleteUser(@Param('id',ParseIntPipe) id:number){
         this.usersService.deleteUser(id)
    }




}
