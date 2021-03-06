import { Credit } from 'src/app/model/credit.class';
import { CreditService } from './../../../service/credit.service';
import { JsonResponse } from './../../../model/json-response.class';
import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { Router, ActivatedRoute } from '@angular/router';
import { ActorService } from 'src/app/service/actor.service';
import { SystemService } from 'src/app/service/system.service';
import { User } from 'src/app/model/user.class';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {
  title: string = "Actor Detail";
  jr: JsonResponse;
  cjr: JsonResponse;
  actor: Actor;
  credits: Credit[];
  user: User;

  constructor(private actorSvc: ActorService,
    private creditSvc: CreditService,
    private route: ActivatedRoute,
    private sysSvc: SystemService,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(parms => {
        let id = parms["id"];
        this.getActorById(id);
        this.creditSvc.listByActor(id).subscribe(jresp => {
          this.cjr = jresp;
          this.credits = this.cjr.data as Credit[];
          console.log(this.credits);
        });
      });
      this.user = this.sysSvc.data.user.instance;
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
