import {NgModule} from '@angular/core';
import {MaterialModules} from './material/material-modules';
import {PrimengModules} from './primeng/primeng-modules';

@NgModule({
  exports: [
    MaterialModules,
    PrimengModules,
  ],
})
export class SharedModule {
}

