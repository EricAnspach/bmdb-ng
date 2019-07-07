import { Actor } from './../model/actor.class';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonResponse } from './../model/json-response.class';
import { Observable } from 'rxjs';

const url: string = 'http://localhost:8080/actors/';


@Injectable({
  providedIn: 'root'
})
export class ActorService {

  list(): Observable <JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }

  get(id: string): Observable<JsonResponse> {
    console.log("actorsvc.get..  id="+id);
    return this.http.get(url+id) as Observable<JsonResponse>;
  }

  // get actor by last name
  get(actor: Actor): Observable<JsonResponse> {
    console.log("actorsvc.get Lines..  actor id="+id);
    return this.http.get(url + "getByLastname/" + id) as Observable<JsonResponse>;
  }

  create(actor: Actor): Observable<JsonResponse> {
    console.log("actorsvc.create...");
    console.log(actor);
    return this.http.post(url, actor) as Observable<JsonResponse>;
  }

  edit(actor: Actor): Observable<any> {
    return this.http.put(url, actor) as Observable<any>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url+id) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }
}

