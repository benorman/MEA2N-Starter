import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders } from './app.routing'

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { RacelogComponent } from './components/racelog/racelog.component'

@NgModule({
  declarations: [
    AppComponent,
      DashboardComponent,
      RacelogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      routing
  
  ],
  providers: [
      appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
