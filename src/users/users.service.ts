import { BadRequestException, Injectable, RequestTimeoutException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { User } from "./user.entity"
import { Repository } from "typeorm"
import { createUserDto } from "./dtos/create-users.dto"
import { Profile } from "src/profile/profile.entity"
import { ConfigService } from "@nestjs/config"

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,

        @InjectRepository(Profile)
        private profileRepository: Repository<Profile>,

        private readonly configService: ConfigService
    ) { }


    public async getAllUsers() {
        try {
            return await this.userRepository.find({
                relations: {
                    profile: true    //EAGER LOADING
                }
            })
        } catch (error) {
            if (error.code === 'ECONNREFUSED') {
                throw new RequestTimeoutException("Error has occured.Try again later", {
                    description: 'Could not connect to database!'
                })
            }
            console.log(error)
        }

    }

    public async createUser(userDto: createUserDto) {
        try {
            // //CREATE PROFILE & SAVE
            userDto.profile = userDto.profile ?? {}

            //check if user with same username/email already exists
            const existingUser = await this.userRepository.findOne({
                where:[{username:userDto.username},{email:userDto.email}]
            })
            if(existingUser){
                throw new BadRequestException('There is already a user with given username/email')
            }

            //CREATE USER
            let user = this.userRepository.create(userDto)
            // SAVE USER
            return await this.userRepository.save(user)
        } catch (error) {
            if (error.code === 'ECONNREFUSED') {
                throw new RequestTimeoutException("Error has occured.Try again later", {
                    description: 'Could not connect to database!'
                })
            }
            // if(error.code === '23505')
            // {
            //     throw new BadRequestException('There is duplicate value for user in database')
            // }
            console.log(error)
        }
    }


    public async deleteUser(id: number) {
        // delete user
        await this.userRepository.delete(id)

        return { deleted: true }
    }

    public async FindUserById(id: number) {
        return await this.userRepository.findOneBy({ id })
    }
}



