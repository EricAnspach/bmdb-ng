import { Component, OnInit } from '@angular/core';
import { JsonResponse } from 'src/app/model/json-response.class';
import { Genre } from 'src/app/model/genre.class';
import { GenreService } from 'src/app/service/genre.service';
import { User } from 'src/app/model/user.class';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {
  title: string = "Genre List";
  jr: JsonResponse;
  sortCriteria: string = "title";
  sortOrder: string = "asc";
  genres: Genre[];
  user: User;


  constructor(private genreSvc: GenreService,
    private sysSvc: SystemService) { }

  ngOnInit() {
    this.genreSvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.genres = this.jr.data as Genre[];
      console.log(this.genres);
    });
    this.user = this.sysSvc.data.user.instance;
  }
  
  remove(genre:Genre, index:number) {
    this.genreSvc.delete(genre.id).subscribe();
    this.genres.splice(index, 1);
    this.genres;
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
