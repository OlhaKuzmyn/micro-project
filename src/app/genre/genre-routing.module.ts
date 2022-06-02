import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GenreMoviesComponent} from "./genre-movies/genre-movies.component";

const routes: Routes = [
  {path: '', component: GenreMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenreRoutingModule { }
