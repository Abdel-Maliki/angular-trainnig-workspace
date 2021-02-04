import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {map, mergeMap, catchError} from 'rxjs/operators';
import {MoviesService} from '../services/movies.service';
import {loadMovies, moviesLoadedSuccess, moviesLoadedError} from '../actions/movie-actions';

@Injectable()
export class MovieEffects {

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(loadMovies),
    mergeMap(() => this.moviesService.getAll()
      .pipe(
        map(movies => moviesLoadedSuccess({movies})),
        catchError((error) => of(moviesLoadedError({error})))
      )
    )
    )
  );

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {
  }
}
