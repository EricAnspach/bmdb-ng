import { JsonResponse } from 'src/app/model/json-response.class';
import { MovieService } from './../../../service/movie.service';
import { ActorService } from 'src/app/service/actor.service';
import { Actor } from './../../../model/actor.class';
import { Movie } from './../../../model/movie.class';
import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/model/credit.class';
import { CreditService } from 'src/app/service/credit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-create',
  templateUrl: './credit-create.component.html',
  styleUrls: ['./credit-create.component.css']
})

export class CreditCreateComponent implements OnInit {
  title: string = "Credit Create";
  resp: any;
  mjr: JsonResponse;
  ajr: JsonResponse;
  movie: Movie;
  actor: Actor;
  movies: Movie[];
  actors: Actor[];
  credit: Credit = new Credit(0, this.movie, this.actor, '');

  create () {
    this.creditSvc.create(this.credit)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/credit/list']);
    });
  } 

  constructor(private creditSvc: CreditService,
    private movieSvc: MovieService,
    private actorSvc: ActorService,
    private router: Router) { }

  ngOnInit() {
    this.movieSvc.list()
    .subscribe(jresp => {
      this.mjr = jresp as JsonResponse;
      this.movies = this.mjr.data as Movie[];
    });
    this.actorSvc.list()
    .subscribe(jresp => {
      this.ajr = jresp as JsonResponse;
      this.actors = this.ajr.data as Actor[];
    });
  }

}
