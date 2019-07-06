import { Genre } from './genre.class';
import { Movie } from './movie.class';

export class MovieGenre {
    id: number;
    movie: Movie;
    genre: Genre;

    constructor (id: number, movie: Movie, genre: Genre) {
        this.id = id;
        this.movie = movie;
        this.genre = genre;
    }

}