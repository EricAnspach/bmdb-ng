import { User } from './../../../model/user.class';
import { SystemService } from 'src/app/service/system.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JsonResponse } from 'src/app/model/json-response.class';
import { Genre } from 'src/app/model/genre.class';
import { GenreService } from 'src/app/service/genre.service';

@Component({
  selector: 'app-genre-detail',
  templateUrl: './genre-detail.component.html',
  styleUrls: ['./genre-detail.component.css']
})

export class GenreDetailComponent implements OnInit {
  title: string = "Genre Detail";
  jr: JsonResponse;
  genre: Genre;
  user: User;

  constructor(private genreSvc: GenreService,
    private sysSvc: SystemService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(parms => {
        let id = parms["id"];
        this.getGenreById(id);
      });
      this.user = this.sysSvc.data.user.instance;
  }

  getGenreById(id: string) {
    this.genreSvc.get(id)
      .subscribe(jsresp => {
        this.jr = jsresp;
        this.genre = this.jr.data as Genre;
      });
  }

  remove(): void {
    this.genreSvc.delete(this.genre.id)
      .subscribe(res => {
        this.router.navigateByUrl("/genre/list");
      });
  }

}
