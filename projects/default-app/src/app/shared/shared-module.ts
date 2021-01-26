import {NgModule} from '@angular/core';
import {MaterialModules} from './material/material-modules';
import {PrimengModules} from './primeng/primeng-modules';
import {AngularModules} from './angular/angular-modules';
import {MyLibModule} from 'my-lib';

@NgModule({
  exports: [
    MaterialModules,
    PrimengModules,
    AngularModules,
    MyLibModule,
  ],
})
export class SharedModule {
}

