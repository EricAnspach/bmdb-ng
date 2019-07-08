import { Genre } from './../model/genre.class';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response.class';
import { HttpClient } from '@angular/common/http';

const url: string = 'http://localhost:8080/genres/';

@Injectable({
  providedIn: 'root'
})

export class GenreService {

  list(): Observable <JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }

  get(id: string): Observable<JsonResponse> {
    console.log("genresvc.get..  id="+id);
    return this.http.get(url+id) as Observable<JsonResponse>;
  }

  create(genre: Genre): Observable<JsonResponse> {
    console.log("genresvc.create...");
    console.log(genre);
    return this.http.post(url, genre) as Observable<JsonResponse>;
  }

  edit(genre: Genre): Observable<any> {
    return this.http.put(url, genre) as Observable<any>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url+id) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }
}
