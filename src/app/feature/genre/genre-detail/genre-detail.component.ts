import { MovieGenre } from 'src/app/model/moviegenre.class';
import { MoviegenreService } from 'src/app/service/moviegenre.service';
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
  mgjr: JsonResponse;
  genre: Genre;
  moviegenres: MovieGenre[];
  user: User;

  constructor(private genreSvc: GenreService,
    private movieGenreSvc: MoviegenreService,
    private sysSvc: SystemService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(parms => {
        let id = parms["id"];
        this.getGenreById(id);
        this.movieGenreSvc.listByGenre(id).subscribe(jresp => {
          this.mgjr = jresp;
          this.moviegenres = this.mgjr.data as MovieGenre[];
          console.log(this.moviegenres);
        });
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
