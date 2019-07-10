import { Actor } from './../../../model/actor.class';
import { Component, OnInit } from '@angular/core';
import { JsonResponse } from 'src/app/model/json-response.class';
import { ActorService } from 'src/app/service/actor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actor-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['./actor-edit.component.css']
})
export class ActorEditComponent implements OnInit {
  title: string = 'Actor Edit';
  actor: Actor;
  jr: JsonResponse;
  id: string;
  resp: any;

  constructor(private actorSvc: ActorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    console.log("actor edit ngOnInit", "id = " + this.id);
    this.actorSvc.get(this.id)
      .subscribe(jrresp => {
        this.jr = jrresp;
        this.actor = this.jr.data as Actor; 
      });
  }

  edit () {
    this.actorSvc.edit(this.actor)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/actor/list']);
    });
  }
}
