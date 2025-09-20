import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id:number

    @Column({
        type:"varchar",
        nullable:false,
        length:30,
        unique:true
    })
    username:string
    
    @Column({
        type:"varchar",
        nullable:false,
        length:100,
        unique:true
    })
    email:string
    
    @Column({
        type:"varchar",
        nullable:false,
        length:100
    })
    password:string

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatededAt:Date

    @DeleteDateColumn()
    deleteddAt:Date
}