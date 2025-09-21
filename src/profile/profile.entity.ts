import { User } from "src/users/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "varchar",
        nullable: true,
        length: 100
    })
    firstName: string

    @Column({
        type: "varchar",
        nullable: true,
        length: 100
    })
    lastName: string

    @OneToOne(() => User,      //define relation
        (user) => user.profile,     //linked to table user profile field 
        { onDelete: 'CASCADE' })     
    @JoinColumn()    //create foreign key
    user: User
}