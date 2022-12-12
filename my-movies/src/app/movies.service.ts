import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get('https://www.omdbapi.com/?i=tt3896198&apikey=8785ee90');
  }
}
