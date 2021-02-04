import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared-module';
import {LifecycleHooksModule} from './components/lifecycle-hooks/lifecycle-hooks.module';
import {DirectiveTestModule} from './components/directives/directive-test.module';
import {TemplateAndComponentOutletModule} from './components/template-and-component-outlet/template-and-component-outlet.module';
import {DependencyInjectionModule} from './tuto/dependency-injection/dependency-injection.module';
import {NgrxTrainingModule} from './ngrx/ngrx-training.module';
import {ActionReducer, MetaReducer, StoreModule} from '@ngrx/store';
import { StoreRouterConnectingModule} from '@ngrx/router-store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer[] = [debug];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    TemplateAndComponentOutletModule,
    DirectiveTestModule,
    LifecycleHooksModule,
    DependencyInjectionModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    StoreRouterConnectingModule.forRoot(),
    NgrxTrainingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
