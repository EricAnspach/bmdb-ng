import { Actor } from './actor.class';
import { Movie } from './movie.class';

export class Credit {
    id: number;
    movie: Movie;
    actor: Actor;
    characterName: string;

    constructor(id: number, movie: Movie, actor: Actor, characterName: string, birthDate: Date) {
        this.id = id;
        this.movie = movie;
        this.actor = actor;
        this.characterName = characterName;
    }

}