import { Column, CreateDateColumn, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


// Entity - декоратор из typeORM
@Entity({name: 'movies'}) // имя в базе данных
export class MovieEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    releaseYear: number;

    @Column({
        default: false
    })
    isPublic: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}