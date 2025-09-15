export class UsersService{
    users:{id:number,name:string,age:number}[] = [
        {id:1,name:"john" , age : 19},
        {id:2,name:"shawn",age:23}
    ]
    getAllUsers(){
    return this.users
    }
    getUserbyId(id:number){
        return this.users.find(x => x.id===id)
    }
    createUser(user:{id:number,name:string,age:number}){
        this.users.push(user)
    }
}



