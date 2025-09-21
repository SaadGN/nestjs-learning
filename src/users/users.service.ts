import { forwardRef, Inject, Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { AuthService } from "src/auth/auth.service"
import { User } from "./user.entity"
import { Repository } from "typeorm"
import { createUserDto } from "./dtos/create-users.dto"
import { Profile } from "src/profile/profile.entity"

@Injectable()
export class UsersService{
constructor(
    @InjectRepository(User)
    private userRepository:Repository<User>,

    @InjectRepository(Profile)
    private profileRepository:Repository<Profile>
){}

    
    getAllUsers(){
        return this.userRepository.find()
    }
    
    public async createUser(userDto:createUserDto){
        // //CREATE PROFILE & SAVE
        userDto.profile = userDto.profile ?? {}
        // let profile = this.profileRepository.create(userDto.profile)
        // await this.profileRepository.save(profile)

        //CREATE USER
        let user = this.userRepository.create(userDto)
        //SET PROFILE 
        // user.profile=profile

        // SAVE USER
        return await this.userRepository.save(user)

               
    }
}



