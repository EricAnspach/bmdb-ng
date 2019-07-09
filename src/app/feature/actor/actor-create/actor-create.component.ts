import { Actor } from './../../../model/actor.class';
import { ActorService } from './../../../service/actor.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor-create',
  templateUrl: './actor-create.component.html',
  styleUrls: ['./actor-create.component.css']
})
export class ActorCreateComponent implements OnInit {
  title: string = "Actor Create";
  resp: any;
  actor: Actor = new Actor(0,'','','', new Date());

  create () {
    this.actorSvc.create(this.actor)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/actor/list']);
    });
  } 

  constructor(private actorSvc: ActorService,
    private router: Router) { }

  ngOnInit() {
  }

}
