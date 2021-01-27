import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared-module';
import {LifecycleHooksChildComponent} from './lifecycle-hooks-child/lifecycle-hooks-child.component';
import {LifecycleHooksMainComponent} from './lifecycle-hooks-main/lifecycle-hooks-main.component';
import {TemplateAndComponentOutletModule} from '../template-and-component-outlet/template-and-component-outlet.module';

@NgModule({
  declarations: [
    LifecycleHooksChildComponent,
    LifecycleHooksMainComponent,
  ],
  exports: [
    LifecycleHooksChildComponent,
    LifecycleHooksMainComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    TemplateAndComponentOutletModule,
  ], providers: [
  ]
})
export class LifecycleHooksModule {
}
