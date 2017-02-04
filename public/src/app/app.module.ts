import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AUTH_PROVIDERS } from 'angular2-jwt';

import { routing, appRoutingProviders } from './app.routing'

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { RacelogComponent } from './components/racelog/racelog.component'
import { WelcomeComponent } from './components/welcome/welcome.component'
import { ProfileComponent } from './components/profile/profile.component'
import { RaceVenueComponent } from './components/racevenue/racevenue.component'
import { Auth } from './services/auth.service'

@NgModule({
  declarations: [
    AppComponent,
      DashboardComponent,
      RacelogComponent,
      WelcomeComponent,
      ProfileComponent,
      RaceVenueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      routing
  
  ],
  providers: [
      appRoutingProviders,
      AUTH_PROVIDERS,
      Auth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
