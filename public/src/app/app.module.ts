import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { GetRaces } from './services/getraces.service';
import { GetSpahtenService } from './services/getspahtens.service';

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
      GetSpahtenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
