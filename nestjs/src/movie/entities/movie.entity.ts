import { Column, CreateDateColumn, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


export enum Genre {
    ACTION = 'action',
    DRAMA = 'drama',
    HORROR = 'horror'
}

// Entity - декоратор из typeORM
@Entity({name: 'movies'}) // имя в базе данных
export class MovieEntity {

    @PrimaryColumn()
    @Generated('uuid')
    id: string;
    // @PrimaryGeneratedColumn()
    // id: number;

    @Column({
        type: 'varchar',
        length: '128',
    })
    title: string;

    @Column({
        type: 'text',
        nullable: true,
    })
    description: string;

    @Column({
        type: 'enum',
        enum: Genre,
        default: Genre.ACTION,
    })
    genre: Genre;

    @Column({
        type: 'decimal',
        precision: 3, //4.76
        scale: 1, //8.3
        default: 0.0,
    })
    rating: number;

    @Column({
        name: 'release_year',
        type: 'int',
        unsigned: true,
    })
    releaseYear: number;

    @Column({
        name: 'is_public',
        type: 'boolean',
        default: false,
    })
    isPublic: boolean;

    @CreateDateColumn({
        name: 'created_at',

    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at',
    })
    updatedAt: Date;

}