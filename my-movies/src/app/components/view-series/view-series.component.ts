import { Component } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';
import { Movie} from 'src/app/Movie';

@Component({
  selector: 'app-view-series',
  templateUrl: './view-series.component.html',
  styleUrls: ['./view-series.component.scss']
})
export class ViewSeriesComponent {
series!: Movie;
searchTitle!: string;
searchSerie: any;
  viewSearch: boolean = false;
  viewAll: boolean = false;
  constructor(private moviesService: MoviesService) {

  }

  GetMovies(typeMovie: string) {
    this.searchTitle = '';
    this.moviesService
    .getSeries(typeMovie)
    .subscribe((data:Movie)  => {
        this.series = data
        console.log(this.series.Search);
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
      .getTitleSeries(this.searchTitle)
      .subscribe((data: Movie) => {
        this.searchSerie = data
        console.log('respuesta', this.searchSerie);
        this.viewSearch = true;
        this.viewAll = false;

      });
    }

}
