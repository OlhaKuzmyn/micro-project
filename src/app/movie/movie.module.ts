import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import {HttpClientModule} from "@angular/common/http";
import {MovieService} from "../services/movie.service";


@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    HttpClientModule
  ],
  providers: [
    MovieService
  //  resolver
  ]
})
export class MovieModule { }
