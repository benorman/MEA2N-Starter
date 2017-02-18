import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { HttpModule, Http, RequestOptions } from '@angular/http';

import { routing, appRoutingProviders } from './app.routing'

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { RacelogComponent } from './components/racelog/racelog.component'
import { WelcomeComponent } from './components/welcome/welcome.component'
import { ProfileComponent } from './components/profile/profile.component'
import { RaceVenueComponent } from './components/racevenue/racevenue.component'


import { Auth } from './services/auth.service'
import { GetRaces } from './services/getraces.service';
import { GetSpahtenService } from './services/getspahtens.service';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => localStorage.getItem('id_token')),
    globalHeaders: [{'Content-Type': 'application/json'}],
  }), http, options);
}


@NgModule({
  declarations: [
    AppComponent,
      DashboardComponent,
      RaceVenueComponent,
      RacelogComponent,
      WelcomeComponent,
      ProfileComponent,
      
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      ReactiveFormsModule,
      routing
  
  ],
  providers: [
      appRoutingProviders,

      Auth, 
      GetRaces,
      GetSpahtenService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
