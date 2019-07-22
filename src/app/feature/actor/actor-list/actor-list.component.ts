import { SystemService } from './../../../service/system.service';
import { User } from './../../../model/user.class';
import { ActorService } from './../../../service/actor.service';
import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { JsonResponse } from 'src/app/model/json-response.class';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  title: string = "Actor List";
  jr: JsonResponse;
  sortCriteria: string = "lastName";
  sortOrder: string = "asc";
  actors: Actor[];
  user: User;

  constructor(private actorSvc: ActorService,
              private sysSvc: SystemService) { }

  ngOnInit() {
    this.getActors();
    this.user = this.sysSvc.data.user.instance;
  }
  
  sortBy(column: string): void {
    if(this.sortCriteria === column) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortCriteria = column;
      this.sortOrder = 'asc';
    }
  }
  
  remove(actor:Actor, index:number) {
    this.actorSvc.delete(actor.id).subscribe();
    this.actors.splice(index, 1);
    this.actors;
  }
  
  getActors() {
    this.actorSvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.actors = this.jr.data as Actor[];
      console.log(this.actors);
    });
  }
}
