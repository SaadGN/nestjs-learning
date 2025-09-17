import { Injectable } from "@nestjs/common"

@Injectable()
export class UsersService{
    users:{id:number,name:string,email:string}[] = [
        {id:1,name:"John" , email : "john@example.com"},
        {id:2,name:"Shawn",email:"shawn@example.com"},
        {id:3,name:"Edward",email:"edward@example.com"}
    ]
    getAllUsers(){
    return this.users
    }
    getUserbyId(id:Number){
        return this.users.find(x => x.id===id)
    }
    createUser(user:{id:number,name:string,email:string}){
        this.users.push(user)
    }
}



