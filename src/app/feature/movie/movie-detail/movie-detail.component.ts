import { CreditService } from 'src/app/service/credit.service';
import { Component, OnInit } from '@angular/core';
import { JsonResponse } from 'src/app/model/json-response.class';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';
import { SystemService } from 'src/app/service/system.service';
import { User } from 'src/app/model/user.class';
import { Credit } from 'src/app/model/credit.class';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  title: string = "Movie Detail";
  jr: JsonResponse;
  mjr: JsonResponse;
  movie: Movie;
  credits: Credit[];
  user: User;

  constructor(private movieSvc: MovieService,
    private creditSvc: CreditService,
    private sysSvc: SystemService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(parms => {
        let id = parms["id"];
        this.getMovieById(id);
        this.creditSvc.listByMovie(id).subscribe(jresp => {
          this.mjr = jresp;
          this.credits = this.mjr.data as Credit[];
          console.log(this.credits);
        });
      });
      this.user = this.sysSvc.data.user.instance;
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
