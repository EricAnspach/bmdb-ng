import { Component, OnInit } from '@angular/core';
import { JsonResponse } from 'src/app/model/json-response.class';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  title: string = "Movie Detail";
  jr: JsonResponse;
  movie: Movie;

  constructor(private movieSvc: MovieService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(parms => {
        let id = parms["id"];
        this.getMovieById(id);
      });
  }

  getMovieById(id: string) {
    this.movieSvc.get(id)
      .subscribe(jsresp => {
        this.jr = jsresp;
        this.movie = this.jr.data as Movie;
      });
  }

  remove(): void {
    this.movieSvc.delete(this.movie.id)
      .subscribe(res => {
        this.router.navigateByUrl("/movie/list");
      });
  }

}
