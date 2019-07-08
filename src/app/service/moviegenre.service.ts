import { MovieGenre } from './../model/moviegenre.class';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response.class';
import { HttpClient } from '@angular/common/http';

const url: string = 'http://localhost:8080/movieGenres/';

@Injectable({
  providedIn: 'root'
})
export class MoviegenreService {

  list(): Observable <JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }

  get(id: string): Observable<JsonResponse> {
    console.log("movieGenresvc.get..  id="+id);
    return this.http.get(url+id) as Observable<JsonResponse>;
  }

  create(movieGenre: MovieGenre): Observable<JsonResponse> {
    console.log("movieGenresvc.create...");
    console.log(movieGenre);
    return this.http.post(url, movieGenre) as Observable<JsonResponse>;
  }

  edit(movieGenre: MovieGenre): Observable<any> {
    return this.http.put(url, movieGenre) as Observable<any>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url+id) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }
}
