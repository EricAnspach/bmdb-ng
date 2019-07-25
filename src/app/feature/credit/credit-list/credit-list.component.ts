import { Credit } from './../../../model/credit.class';
import { Component, OnInit } from '@angular/core';
import { CreditService } from 'src/app/service/credit.service';
import { JsonResponse } from 'src/app/model/json-response.class';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent implements OnInit {
  jr: JsonResponse;
  credits: Credit[];
  title: string = "Credit List";
  sortCriteria: string = "name";
  sortOrder: string = "asc"; // ascending -- or can use descending

  constructor(private creditSvc: CreditService) { }

  ngOnInit() {
    this.creditSvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.credits = this.jr.data as Credit[];
      console.log(this.credits);
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

  remove(credit:Credit, index:number) {
    this.creditSvc.delete(credit.id).subscribe();
    this.credits.splice(index, 1);
    this.credits;
  }

}
