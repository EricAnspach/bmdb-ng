export class Movie {
    id: number;
    title: string;
    rating: string;
    year: number;
    director: string;

    constructor (id: number, title: string, rating: string, year: number, director: string) {
        this.id = id;
        this.title = title;
        this.rating = rating;
        this.year = year;
        this.director = director;
    }

}
