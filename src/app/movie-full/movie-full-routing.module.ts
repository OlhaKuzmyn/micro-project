import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MovieFullComponent} from "./movie-full/movie-full.component";
import {MovieFullResolver} from "./resolver/movie-full.resolver";

const routes: Routes = [
  {path: '', component: MovieFullComponent, resolve: {data: MovieFullResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieFullRoutingModule { }
