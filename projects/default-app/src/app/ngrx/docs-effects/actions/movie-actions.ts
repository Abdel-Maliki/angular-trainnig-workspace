import {createAction, props} from '@ngrx/store';
import {Movie} from '../services/movies.service';


export const loadMovies = createAction(
  '[Movies Page] Load Movies'
);

export const moviesLoadedSuccess = createAction(
  '[Movies API] Movies Loaded Success',
  props<{ movies: Movie[] }>(),
);

export const moviesLoadedError = createAction(
  '[Movies API] Movies Loaded Error',
  props<{ error: any }>(),
);
