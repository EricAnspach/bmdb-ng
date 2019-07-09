import { JsonResponse } from './../../../model/json-response.class';
import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { Router, ActivatedRoute } from '@angular/router';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {
  title: string = "Actor Detail";
  jr: JsonResponse;
  actor: Actor;

  constructor(private actorSvc: ActorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(parms => {
        let id = parms["id"];
        this.getActorById(id);
      });
  }

  getActorById(id: string) {
    this.actorSvc.get(id)
      .subscribe(jsresp => {
        this.jr = jsresp;
        this.actor = this.jr.data as Actor;
      });
  }

  remove(): void {
    this.actorSvc.delete(this.actor.id)
      .subscribe(res => {
        this.router.navigateByUrl("/actor/list");
      });
  }
}
