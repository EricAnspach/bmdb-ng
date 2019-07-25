import { Component, OnInit } from '@angular/core';
import { MoviegenreService } from 'src/app/service/moviegenre.service';
import { MovieGenre } from 'src/app/model/moviegenre.class';
import { GenreService } from 'src/app/service/genre.service';
import { MovieService } from 'src/app/service/movie.service';
import { Router } from '@angular/router';
import { JsonResponse } from 'src/app/model/json-response.class';
import { Movie } from 'src/app/model/movie.class';
import { Genre } from 'src/app/model/genre.class';

@Component({
  selector: 'app-moviegenre-create',
  templateUrl: './moviegenre-create.component.html',
  styleUrls: ['./moviegenre-create.component.css']
})
export class MoviegenreCreateComponent implements OnInit {
  title: string = "Moviegenre Create";
  resp: any;
  mjr: JsonResponse;
  gjr: JsonResponse;
  movie: Movie;
  genre: Genre;
  movies: Movie[];
  genres: Genre[];
  moviegenre: MovieGenre = new MovieGenre(0, this.movie, this.genre);

  create () {
    this.moviegenreSvc.create(this.moviegenre)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/moviegenre/list']);
    });
  } 

  constructor(private moviegenreSvc: MoviegenreService,
    private movieSvc: MovieService,
    private genreSvc: GenreService,
    private router: Router) { }

  ngOnInit() {
    this.movieSvc.list()
    .subscribe(jresp => {
      this.mjr = jresp as JsonResponse;
      this.movies = this.mjr.data as Movie[];
    });
    this.genreSvc.list()
    .subscribe(jresp => {
      this.gjr = jresp as JsonResponse;
      this.genres = this.gjr.data as Genre[];
    });
  }

}
