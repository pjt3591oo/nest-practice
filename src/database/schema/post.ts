import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class Posts {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    author: string;
}