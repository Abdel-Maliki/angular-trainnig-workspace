import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CounterModule} from './counter/counter.module';
import { NgrxMainComponent } from './ngrx-main/ngrx-main.component';
import {SelectorsDocsModule} from './docs-selectors/selectors-docs.module';
import {DzoneTutoModule} from './dzone-tuto/dzone-tuto.module';
import {DocsEffectsModule} from './docs-effects/docs-effects.module';
import {DocsEntityModule} from './docs-entity/docs-entity.module';



@NgModule({
  declarations: [NgrxMainComponent],
  exports: [
    NgrxMainComponent
  ],
  imports: [
    CommonModule,
    CounterModule,
    SelectorsDocsModule,
    DzoneTutoModule,
    DocsEffectsModule,
    DocsEntityModule,
  ]
})
export class NgrxTrainingModule { }
