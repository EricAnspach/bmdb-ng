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
  sortCriteria: string = "name";
  sortOrder: string = "asc";
  actors: Actor[];

  constructor(private actorSvc: ActorService) { }

  ngOnInit() {
    this.actorSvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.actors = this.jr.data as Actor[];
      console.log(this.actors);
    });
  }

  sortBy(column: string): void {
    if(this.sortCriteria === column) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortCriteria = column;
      this.sortOrder = 'asc';
    }
  }

}
