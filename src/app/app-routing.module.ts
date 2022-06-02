import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'movies', pathMatch: 'full'},
      {path: 'movies', loadChildren: () => import('./movie/movie.module').then(value => value.MovieModule)},
      {path: 'movie/:id', loadChildren: () => import('./movie-full/movie-full.module').then(value => value.MovieFullModule)},
      {path: 'genres', loadChildren: () => import('./genre/genre.module').then(value => value.GenreModule)}
    ]}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
