import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EntityTestComponent} from './components/entity-test/entity-test.component';
import {StoreModule} from '@ngrx/store';
import {reducers, userFeaturName} from './index';
import {SharedModule} from '../../shared/shared-module';


@NgModule({
  declarations: [EntityTestComponent],
  exports: [
    EntityTestComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(userFeaturName, reducers),
    SharedModule
  ]
})
export class DocsEntityModule {
}
