import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// import {result} from "../app/components/view-movies/view-movies.component"
import { Movie } from './Movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies(search:string): Observable<any> {
    // return this.http.get('https://www.omdbapi.com/?i=tt3896198&apikey=8785ee90');
      return this.http.get<Movie[]>(`https://www.omdbapi.com/?apikey=8785ee90&type=movie&s=${search}`);
  }

  getSeries(search:string): Observable<any> {
    // return this.http.get('https://www.omdbapi.com/?i=tt3896198&apikey=8785ee90');
      return this.http.get<Movie[]>(`https://www.omdbapi.com/?apikey=8785ee90&type=series&s=${search}`);
  }

  getTitleMovies(search:string): Observable<any> {
    // return this.http.get('https://www.omdbapi.com/?i=tt3896198&apikey=8785ee90');
      return this.http.get<Movie[]>(`https://www.omdbapi.com/?apikey=8785ee90&type=movie&t=${search}`);
  }

}
