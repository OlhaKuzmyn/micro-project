import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenreRoutingModule } from './genre-routing.module';
import { GenreListComponent } from './genre-list/genre-list.component';
import { GenreMoviesComponent } from './genre-movies/genre-movies.component';
import { GenreMovieComponent } from './genre-movie/genre-movie.component';
import {HttpModule} from "../http.module";


@NgModule({
  declarations: [
    GenreListComponent,
    GenreMoviesComponent,
    GenreMovieComponent
  ],
  imports: [
    CommonModule,
    GenreRoutingModule,
    HttpModule
  ]
})
export class GenreModule { }
