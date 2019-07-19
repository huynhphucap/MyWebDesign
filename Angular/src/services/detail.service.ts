import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor( private http:HttpClient) {  }
  getDetailFilm(): Observable<any>{
    return this.http.get('./app/detail/detail.json');
  }
}
