import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SelectorsDocsComponent} from './components/selectors-docs/selectors-docs.component';


@NgModule({
  declarations: [SelectorsDocsComponent],
  exports: [SelectorsDocsComponent],
  imports: [
    CommonModule
  ]
})
export class SelectorsDocsModule {
}
