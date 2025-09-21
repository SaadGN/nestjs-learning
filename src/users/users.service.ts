import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { User } from "./user.entity"
import { Repository } from "typeorm"
import { createUserDto } from "./dtos/create-users.dto"
import { Profile } from "src/profile/profile.entity"

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,

        @InjectRepository(Profile)
        private profileRepository: Repository<Profile>
    ) { }


    getAllUsers() {
        return this.userRepository.find({
            relations: {
                profile: true    //EAGER LOADING
            }
        })
    }

    public async createUser(userDto: createUserDto) {
        // //CREATE PROFILE & SAVE
        userDto.profile = userDto.profile ?? {}

        //CREATE USER
        let user = this.userRepository.create(userDto)
        // SAVE USER
        return await this.userRepository.save(user)
    }


    public async deleteUser(id: number) {
        // delete user
        await this.userRepository.delete(id)

        return { deleted: true }
    }
}



