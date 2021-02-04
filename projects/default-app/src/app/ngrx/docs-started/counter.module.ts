import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyCounterComponent} from './components/my-counter/my-counter.component';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './reducer/counter-reducer';
import {MatButtonModule} from '@angular/material/button';
import {SharedModule} from '../../shared/shared-module';


@NgModule({
  declarations: [MyCounterComponent],
  exports: [
    MyCounterComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('count', counterReducer),
    MatButtonModule,
    SharedModule,
  ]
})
export class CounterModule {
}
