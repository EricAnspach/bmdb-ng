import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonResponse } from 'src/app/model/json-response.class';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  title: string = 'Movie Edit';
  movie: Movie;
  jr: JsonResponse;
  id: string;
  resp: any;

  constructor(private movieSvc: MovieService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    console.log("movie edit ngOnInit", "id = " + this.id);
    this.movieSvc.get(this.id)
      .subscribe(jrresp => {
        this.jr = jrresp;
        this.movie = this.jr.data as Movie; 
      });
  }

  edit () {
    this.movieSvc.edit(this.movie)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/movie/list']);
    });
  }

}
