import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DependencyInjectionComponent} from './components/dependency-injection/dependency-injection.component';
import {Providers} from './components/class/providers';
import { DependencyInjectionMainComponent } from './components/dependency-injection-main/dependency-injection-main.component';
import { DependencyInjectionStaticComponent } from './components/dependency-injection-static/dependency-injection-static.component';
import {SharedModule} from '../../shared/shared-module';


@NgModule({
  declarations: [DependencyInjectionComponent, DependencyInjectionMainComponent, DependencyInjectionStaticComponent],
  exports: [
    DependencyInjectionMainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  providers: Providers.values
})
export class DependencyInjectionModule {
}
