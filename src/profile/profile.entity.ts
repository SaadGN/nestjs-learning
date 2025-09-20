import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}