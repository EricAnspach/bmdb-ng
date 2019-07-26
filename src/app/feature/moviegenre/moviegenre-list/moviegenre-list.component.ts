import { MoviegenreService } from './../../../service/moviegenre.service';
import { MovieGenre } from './../../../model/moviegenre.class';
import { Component, OnInit } from '@angular/core';
import { JsonResponse } from 'src/app/model/json-response.class';

@Component({
  selector: 'app-moviegenre-list',
  templateUrl: './moviegenre-list.component.html',
  styleUrls: ['./moviegenre-list.component.css']
})
export class MoviegenreListComponent implements OnInit {
  jr: JsonResponse;
  moviegenres: MovieGenre[];
  title: string = "MovieGenre List";
  sortCriteria: string = "name";
  sortOrder: string = "asc"; // ascending -- or can use descending

  constructor(private moviegenreSvc: MoviegenreService) { }

  ngOnInit() {
    this.moviegenreSvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.moviegenres = this.jr.data as MovieGenre[];
      console.log(this.moviegenres);
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
  
  remove(moviegenre:MovieGenre, index:number) {
    this.moviegenreSvc.delete(moviegenre.id).subscribe();
    this.moviegenres.splice(index, 1);
    this.moviegenres;
  }

}
