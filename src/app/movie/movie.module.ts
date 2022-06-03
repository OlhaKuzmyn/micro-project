import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import {MovieService} from "../services/movie.service";
import {HttpModule} from "../http.module";


@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    HttpModule
  ],
  providers: [
    MovieService
  ]
})
export class MovieModule { }
