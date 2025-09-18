import { forwardRef, Inject, Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { AuthService } from "src/auth/auth.service"
import { User } from "./user.entity"
import { Repository } from "typeorm"
import { createUserDto } from "./dtos/create-users.dto"

@Injectable()
export class UsersService{
constructor(
    @InjectRepository(User)
    private userRepository:Repository<User>
){}

    
    getAllUsers(){
        return this.userRepository.find()
    }
    
    public async createUser(userDto:createUserDto){
        //if the user already exists
        const user = await this.userRepository.findOne({
            where:{email:userDto.email}
        })
        if(user){
            return "user aready exists"
        
        }
        let newUser = this.userRepository.create(userDto)
        newUser = await this.userRepository.save(newUser)
        return newUser
    }
}



