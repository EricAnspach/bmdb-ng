import { Component, OnInit } from '@angular/core';
import { JsonResponse } from 'src/app/model/json-response.class';
import { Genre } from 'src/app/model/genre.class';
import { GenreService } from 'src/app/service/genre.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genre-edit',
  templateUrl: './genre-edit.component.html',
  styleUrls: ['./genre-edit.component.css']
})
export class GenreEditComponent implements OnInit {
  title: string = 'Genre Edit';
  genre: Genre;
  jr: JsonResponse;
  id: string;
  resp: any;

  constructor(private genreSvc: GenreService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    console.log("genre edit ngOnInit", "id = " + this.id);
    this.genreSvc.get(this.id)
      .subscribe(jrresp => {
        this.jr = jrresp;
        this.genre = this.jr.data as Genre; 
      });
  }

  edit () {
    this.genreSvc.edit(this.genre)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/genre/list']);
    });
  }

}
