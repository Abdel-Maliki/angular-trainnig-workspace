import {createReducer, createSelector, createFeatureSelector, on} from '@ngrx/store';
import {Movie} from '../services/movies.service';
import {moviesLoadedSuccess, moviesLoadedError} from '../actions/movie-actions';

export interface MovieState {
  movieState: Movie[];
  movieState2: Movie[];
}

export const movieFeatureName = 'movie';

const movieInitialState: Movie[] = [];

export const moviesReducers = createReducer<Movie[]>(
  movieInitialState,
  on(moviesLoadedSuccess, (state: Movie[], actions) => {
    console.log('Class: moviesLoadedSuccess, Function: , Line 16 (): ', );
    return actions.movies;
  }),
  on(moviesLoadedError, () => {
    return [];
  }),
);


export const moviesReducers2 = createReducer<Movie[]>(
  movieInitialState,
  on(moviesLoadedSuccess, (state: Movie[], actions) => {
    console.log('Class: moviesReducers2, Function: , Line 16 (): ', );
    return actions.movies;
  }),
  on(moviesLoadedError, () => {
    return [];
  }),
);

export const futurSelector = createFeatureSelector<MovieState>(
  movieFeatureName
);

export const movieSelector = createSelector(
  futurSelector,
  s1 => s1.movieState.concat(new Movie('added')),
  )
;

