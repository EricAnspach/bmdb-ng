import { Movie } from './../model/movie.class';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response.class';
import { HttpClient } from '@angular/common/http';

const url: string = 'http://localhost:8080/movies/';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  list(): Observable <JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }

  get(id: string): Observable<JsonResponse> {
    console.log("moviesvc.get..  id="+id);
    return this.http.get(url+id) as Observable<JsonResponse>;
  }

  create(movie: Movie): Observable<JsonResponse> {
    console.log("moviesvc.create...");
    console.log(movie);
    return this.http.post(url, movie) as Observable<JsonResponse>;
  }

  edit(movie: Movie): Observable<any> {
    return this.http.put(url, movie) as Observable<any>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url+id) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }
}
