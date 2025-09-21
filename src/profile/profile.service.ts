import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService {

    constructor(
        @InjectRepository(Profile)
        private readonly profileRepositry:Repository<Profile>
    ){}
    
    public getAllProfiles(){
        this.profileRepositry.find()
    }
        

}
