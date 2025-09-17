import { forwardRef, Inject, Injectable } from "@nestjs/common"
import { AuthService } from "src/auth/auth.service"

@Injectable()
export class UsersService{
constructor(@Inject(forwardRef( () => AuthService)) private readonly authService:AuthService){}

    users:{id:number,name:string,email:string,pswd:string}[] = [
        {id:1,name:"John" , email : "john@example.com",pswd:"1"},
        {id:2,name:"Shawn",email:"shawn@example.com",pswd:"2"},
        {id:3,name:"Edward",email:"edward@example.com",pswd:"3"}
    ]
    getAllUsers(){
        if(this.authService.isAuthenticated)
        {
             return this.users
        }
         return `User is not logged-in`
    }
    getUserbyId(id:Number){
        return this.users.find(x => x.id===id)
    }
    createUser(user:{id:number,name:string,email:string,pswd:string}){
        this.users.push(user)
    }
}



