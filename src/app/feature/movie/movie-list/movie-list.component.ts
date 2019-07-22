import { Component, OnInit } from '@angular/core';
import { JsonResponse } from 'src/app/model/json-response.class';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';
import { User } from 'src/app/model/user.class';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title: string = "Movie List";
  jr: JsonResponse;
  sortCriteria: string = "title";
  sortOrder: string = "asc";
  movies: Movie[];
  user: User;


  constructor(private movieSvc: MovieService,
    private sysSvc: SystemService) { }

  ngOnInit() {
    this.movieSvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.movies = this.jr.data as Movie[];
      console.log(this.movies);
    });
    this.user = this.sysSvc.data.user.instance;
  }

  remove(movie:Movie, index:number) {
    this.movieSvc.delete(movie.id).subscribe();
    this.movies.splice(index, 1);
    this.movies;
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
