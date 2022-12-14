// import { Component } from '@angular/core';

import { Component } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';
// import { HttpClient } from "@angular/common/http";
import { Movie } from 'src/app/Movie';
// import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-view-movies',
  templateUrl: './view-movies.component.html',
  styleUrls: ['./view-movies.component.scss']
})


export class ViewMoviesComponent {
  searchTitle!: string;
  movies!: Movie;
  searchMovie: any;
  viewSearch: boolean = false;
  viewAll: boolean = false;
  constructor(private moviesService: MoviesService) {

  }

  GetMovies(typeMovie: string) {
    this.moviesService
      .getMovies(typeMovie)
      .subscribe((data: Movie) => {
        this.movies = data
        console.log(this.movies.Search);
      });
  }

  viewMoviesLove() {
    this.GetMovies('love')
    this.viewSearch = false;
    this.viewAll = true;
  }

  viewMoviesComedy() {
    this.GetMovies('Comedy')
    this.viewSearch = false;
    this.viewAll = true;
  }

  viewMoviesMystery() {
    this.GetMovies('Mystery')
    this.viewSearch = false;
    this.viewAll = true;
  }

  viewMoviesAction() {
    this.GetMovies('Action')
    this.viewSearch = false;
    this.viewAll = true;
  }

  searchTitleMovie() {
    console.log('input', this.searchTitle)
    this.moviesService
      .getTitleMovies(this.searchTitle)
      .subscribe((data: Movie) => {
        this.searchMovie = data
        console.log('respuesta', this.searchMovie);
        this.viewSearch = true;
        this.viewAll = false;

      });
  }
}
