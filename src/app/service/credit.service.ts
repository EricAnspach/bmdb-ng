import { Credit } from './../model/credit.class';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response.class';
import { HttpClient } from '@angular/common/http';


const url: string = 'http://localhost:8080/credits/';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  list(): Observable <JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }

  get(id: string): Observable<JsonResponse> {
    console.log("creditsvc.get..  id="+id);
    return this.http.get(url+id) as Observable<JsonResponse>;
  }

  create(credit: Credit): Observable<JsonResponse> {
    console.log("creditsvc.create...");
    console.log(credit);
    return this.http.post(url, credit) as Observable<JsonResponse>;
  }

  edit(credit: Credit): Observable<any> {
    return this.http.put(url, credit) as Observable<any>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url+id) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }
}
