import {InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoviesPageComponent} from './components/movies-page/movies-page.component';
import {SharedModule} from '../../shared/shared-module';
import {EffectsModule} from '@ngrx/effects';
import {MovieEffects} from './effects/movie.effects';
import {ActionReducerMap, StoreModule} from '@ngrx/store';
import {movieFeatureName, moviesReducers, moviesReducers2, MovieState} from './reducers/movie-reducers';


export const FEATURE_REDUCER_TOKEN = new InjectionToken<ActionReducerMap<MovieState>>('Feature Reducers');

export function getReducers(): ActionReducerMap<MovieState> {
  return {movieState: moviesReducers, movieState2: moviesReducers2};
}

@NgModule({
  declarations: [MoviesPageComponent],
  exports: [MoviesPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(movieFeatureName, FEATURE_REDUCER_TOKEN),
    EffectsModule.forFeature([MovieEffects])
  ],
  providers: [
    {
      provide: FEATURE_REDUCER_TOKEN,
      useFactory: getReducers,
    },
  ],
})
export class DocsEffectsModule {
}
