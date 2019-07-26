import { ActorService } from './../../../service/actor.service';
import { MovieService } from './../../../service/movie.service';
import { Actor } from './../../../model/actor.class';
import { Movie } from 'src/app/model/movie.class';
import { Component, OnInit } from '@angular/core';
import { CreditService } from 'src/app/service/credit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonResponse } from 'src/app/model/json-response.class';
import { Credit } from 'src/app/model/credit.class';

@Component({
  selector: 'app-credit-edit',
  templateUrl: './credit-edit.component.html',
  styleUrls: ['./credit-edit.component.css']
})

export class CreditEditComponent implements OnInit {
  title: string = 'Credit Edit';
  credit: Credit;
  jr: JsonResponse;
  mjr: JsonResponse;
  ajr: JsonResponse;
  id: string;
  resp: any;
  movies: Movie[];
  actors: Actor[];

  constructor(private creditSvc: CreditService,
    private movieSvc: MovieService,
    private actorSvc: ActorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    console.log("credit edit ngOnInit", "id = " + this.id);
    this.creditSvc.get(this.id)
      .subscribe(jrresp => {
        this.jr = jrresp;
        this.credit = this.jr.data as Credit; 
      });
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

  edit () {
    this.creditSvc.edit(this.credit)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/credit/list']);
    });
  }

  
  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

}