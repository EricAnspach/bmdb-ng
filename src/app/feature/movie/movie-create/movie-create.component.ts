import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {
  title: string = "Movie Create";
  resp: any;
  movie: Movie = new Movie(0,'','', null, '');

  create () {
    this.movieSvc.create(this.movie)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/movie/list']);
    });
  } 

  constructor(private movieSvc: MovieService,
    private router: Router) { }

  ngOnInit() {
  }

}
