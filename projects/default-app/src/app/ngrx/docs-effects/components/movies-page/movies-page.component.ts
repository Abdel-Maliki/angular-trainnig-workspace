import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Movie} from '../../services/movies.service';
import {loadMovies} from '../../actions/movie-actions';
import {movieSelector, MovieState} from '../../reducers/movie-reducers';

@Component({
  selector: 'training-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit {

  movies$: Observable<Movie[]> = this.store.pipe(select(movieSelector));

  constructor(private store: Store<MovieState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadMovies());
  }

}
