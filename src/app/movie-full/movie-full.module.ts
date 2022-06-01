import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieFullRoutingModule } from './movie-full-routing.module';
import {HttpModule} from "../http.module";
import { MovieFullComponent } from './movie-full/movie-full.component';


@NgModule({
  declarations: [
    MovieFullComponent
  ],
  imports: [
    CommonModule,
    MovieFullRoutingModule,
    HttpModule
  ]
})
export class MovieFullModule { }
