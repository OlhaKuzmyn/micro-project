import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { HeaderComponent } from './app-components/header/header.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import {HttpModule} from "./http.module";
import {GenreListComponent} from "./app-components/genre-list/genre-list.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLayoutComponent,
    GenreListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
