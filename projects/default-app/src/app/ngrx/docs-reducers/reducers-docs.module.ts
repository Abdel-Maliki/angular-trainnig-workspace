import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {MatButtonModule} from '@angular/material/button';
import {SharedModule} from '../../shared/shared-module';
import * as fromScoreboard from './reducers/scoreboard.reducer';


@NgModule({
  declarations: [],
  exports: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromScoreboard.scoreboardFeatureKey, fromScoreboard.reducer),
    MatButtonModule,
    SharedModule,
  ]
})
export class CounterModule {
}
