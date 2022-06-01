import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieFullComponent} from "./movie-full/movie-full.component";

const routes: Routes = [
  {path: '', component: MovieFullComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieFullRoutingModule { }
