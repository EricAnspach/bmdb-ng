import { Genre } from './../../../model/genre.class';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { MoviegenreService } from 'src/app/service/moviegenre.service';
import { MovieService } from 'src/app/service/movie.service';
import { GenreService } from 'src/app/service/genre.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieGenre } from 'src/app/model/moviegenre.class';
import { JsonResponse } from 'src/app/model/json-response.class';

@Component({
  selector: 'app-moviegenre-edit',
  templateUrl: './moviegenre-edit.component.html',
  styleUrls: ['./moviegenre-edit.component.css']
})

export class MoviegenreEditComponent implements OnInit {
  title: string = 'Edit a Genre linked to a Movie';
  moviegenre: MovieGenre;
  jr: JsonResponse;
  mjr: JsonResponse;
  gjr: JsonResponse;
  id: string;
  resp: any;
  movies: Movie[];
  genres: Genre[];

  constructor(private moviegenreSvc: MoviegenreService,
    private movieSvc: MovieService,
    private genreSvc: GenreService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    console.log("moviegenre edit ngOnInit", "id = " + this.id);
    this.moviegenreSvc.get(this.id)
      .subscribe(jrresp => {
        this.jr = jrresp;
        this.moviegenre = this.jr.data as MovieGenre; 
      });
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

  edit () {
    this.moviegenreSvc.edit(this.moviegenre)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/moviegenre/list']);
    });
  }

  
  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

}
