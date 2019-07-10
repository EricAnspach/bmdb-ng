import { Component, OnInit } from '@angular/core';
import { JsonResponse } from 'src/app/model/json-response.class';
import { Genre } from 'src/app/model/genre.class';
import { GenreService } from 'src/app/service/genre.service';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {
  title: string = "Genre List";
  jr: JsonResponse;
  genres: Genre[];

  constructor(private genreSvc: GenreService) { }

  ngOnInit() {
    this.genreSvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.genres = this.jr.data as Genre[];
      console.log(this.genres);
    });
  }
}
