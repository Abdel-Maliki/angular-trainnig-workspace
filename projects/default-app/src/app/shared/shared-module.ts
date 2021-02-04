import {NgModule} from '@angular/core';
import {MaterialModules} from './material/material-modules';
import {PrimengModules} from './primeng/primeng-modules';
import {AngularModules} from './angular/angular-modules';
import {MyLibModule} from 'my-lib';
import {TrainingDirectiveModule} from '../directives/training-directive.module';
import {ReactiveComponentModule} from '@ngrx/component';

@NgModule({
  exports: [
    MaterialModules,
    PrimengModules,
    AngularModules,
    TrainingDirectiveModule,
    MyLibModule,
    ReactiveComponentModule,
  ],
})
export class SharedModule {
}

