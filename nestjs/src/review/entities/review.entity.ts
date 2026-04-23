import { MovieEntity } from "src/movie/entities/movie.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";



// Entity - декоратор из typeORM
@Entity({name: 'reviews'}) // имя в базе данных
export class ReviewEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    // @PrimaryGeneratedColumn()
    // id: number;

    @Column({
        type: 'text',
    })
    text: string;

    @Column({
        type: 'decimal',
        precision: 3, //4.76
        scale: 1, //8.3
        default: 0.0,
    })
    rating: number;


    @Column({
        name: 'movie_id',
        type: 'uuid',
    })
    movieId: string;

    @ManyToOne(
        () => MovieEntity,
        (movie) => movie.reviews,
        {
            onDelete: 'CASCADE',
        }
    )
    @JoinColumn({
        name: 'movie_id'
    })
    movie: MovieEntity;


    @CreateDateColumn({
        name: 'created_at',
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at',
    })
    updatedAt: Date;

}