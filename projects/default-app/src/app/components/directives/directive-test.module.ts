import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared-module';
import {DirectiveTestComponent} from './directive-test/directive-test.component';
import { BoxComponent } from './box/box.component';


@NgModule({
  declarations: [
    DirectiveTestComponent,
    BoxComponent,
  ],
  exports: [
    DirectiveTestComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class DirectiveTestModule {
}
