import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "varchar",
        nullable: false,
        length: 100
    })
    firstName: string

    @Column({
        type: "varchar",
        nullable: false,
        length: 100
    })
    lastName: string
}