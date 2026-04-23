// import { ActorEntity } from "src/actor/entities/actor.entity";
// import { ReviewEntity } from "src/review/entities/review.entity";
// import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
// import { PosterEntity } from "./poster.entity";


// export enum Genre {
//     ACTION = 'action',
//     DRAMA = 'drama',
//     HORROR = 'horror'
// }

// // Entity - декоратор из typeORM
// @Entity({name: 'movies'}) // имя в базе данных
// export class MovieEntity {

//     // @PrimaryColumn()
//     // @Generated('uuid')
//     @PrimaryGeneratedColumn('uuid')
//     id: string;
//     // @PrimaryGeneratedColumn()
//     // id: number;

//     @Column({
//         type: 'varchar',
//         length: '128',
//     })
//     title: string;

//     @Column({
//         type: 'text',
//         nullable: true,
//     })
//     description: string;

//     @Column({
//         type: 'enum',
//         enum: Genre,
//         default: Genre.ACTION,
//     })
//     genre: Genre;

//     @Column({
//         name: 'poster_id',
//         type: 'uuid',
//         nullable: true,
//     })
//     posterId: string;

//     @OneToOne(
//         () => PosterEntity,
//         (poster) => poster.movie,
//         {
//             onDelete: 'CASCADE',
//             nullable: true,
//         }
//     )
//     @JoinColumn({
//         name: 'poster_id'
//     })
//     poster: PosterEntity | null;

//     @Column({
//         type: 'decimal',
//         precision: 3, //4.76
//         scale: 1, //8.3
//         default: 0.0,
//     })
//     rating: number;

//     @Column({
//         name: 'release_year',
//         type: 'int',
//         unsigned: true,
//     })
//     releaseYear: number;

//     @Column({
//         name: 'is_public',
//         type: 'boolean',
//         default: false,
//     })
//     isPublic: boolean;

//     @OneToMany(
//         () => ReviewEntity,
//         (review) => review.movie,
//     )
//     reviews: ReviewEntity[];


//     @ManyToMany(
//         () => ActorEntity,
//         (actor) => actor.movies,
//     )
//     @JoinTable({
//         name: 'movie_actors',
//         joinColumn: {
//             name: 'movie_id',
//             referencedColumnName: 'id',
//         },
//         inverseJoinColumn: {
//             name: 'actor_id',
//             referencedColumnName: 'id',
//         }
//     })
//     actors: ActorEntity[];

//     @CreateDateColumn({
//         name: 'created_at',

//     })
//     createdAt: Date;

//     @UpdateDateColumn({
//         name: 'updated_at',
//     })
//     updatedAt: Date;

// }