import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { EventsListComponent } from './components/events-list/events-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //Angular solo dice que hay una version mas actualizada pero no se va a romper
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
