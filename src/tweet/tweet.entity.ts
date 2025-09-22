import { Hashtag } from "src/hashtag/hashtag.entity";
import { User } from "src/users/user.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Tweet {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'text',
        nullable: false
    })
    text: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne(() => User, (user) => user.tweets
        // ,{eager:true}        eager-loading
    )
    user: User


    @ManyToMany(() => Hashtag)
    @JoinTable()
    hashtags: Hashtag[]

}