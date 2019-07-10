import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/model/genre.class';
import { GenreService } from 'src/app/service/genre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genre-create',
  templateUrl: './genre-create.component.html',
  styleUrls: ['./genre-create.component.css']
})
export class GenreCreateComponent implements OnInit {
  title: string = "Genre Create";
  resp: any;
  genre: Genre = new Genre(0,'');

  create () {
    this.genreSvc.create(this.genre)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/genre/list']);
    });
  } 

  constructor(private genreSvc: GenreService,
    private router: Router) { }

  ngOnInit() {
  }

}
