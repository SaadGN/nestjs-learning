export class UsersService{
    users:{id:number,name:string,email:string}[] = [
        {id:1,name:"john" , email : "john@example.com"},
        {id:2,name:"shawn",email:"shawn@example.com"}
    ]
    getAllUsers(){
    return this.users
    }
    getUserbyId(id:number){
        return this.users.find(x => x.id===id)
    }
    createUser(user:{id:number,name:string,email:string}){
        this.users.push(user)
    }
}



