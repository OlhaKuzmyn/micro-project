import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieFullRoutingModule } from './movie-full-routing.module';
import {HttpModule} from "../http.module";
import { MovieFullComponent } from './movie-full/movie-full.component';
import {MovieService} from "../services";
import {MovieFullResolver} from "./resolver/movie-full.resolver";


@NgModule({
  declarations: [
    MovieFullComponent
  ],
  imports: [
    CommonModule,
    MovieFullRoutingModule,
    HttpModule
  ],
  providers: [
    MovieService,
    MovieFullResolver
  ]
})
export class MovieFullModule { }
