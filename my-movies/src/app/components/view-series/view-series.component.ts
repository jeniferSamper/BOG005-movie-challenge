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
  constructor(private moviesService: MoviesService) {

  }

  GetMovies(typeMovie: string) {
    this.moviesService
    .getSeries(typeMovie)
    .subscribe((data:Movie)  => {
        this.series = data
        console.log(this.series.Search);
        });
  }

  viewMoviesLove() {
    this.GetMovies('love')
  }

  viewMoviesComedy() {
    this.GetMovies('Comedy')
  }

  viewMoviesMystery() {
    this.GetMovies('Mystery')
  }

  viewMoviesAction() {
    this.GetMovies('Action')
  }
}
