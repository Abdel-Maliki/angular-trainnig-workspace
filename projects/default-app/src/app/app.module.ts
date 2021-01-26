import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared-module';
import {User} from './entity/user';
import {TemplateAndComponentOutletModule} from './components/template-and-component-outlet/template-and-component-outlet.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    TemplateAndComponentOutletModule,
  ],
  providers: [
    {provide: User, useValue: null}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
