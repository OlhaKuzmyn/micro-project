import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import {MovieService} from "../../services/movie.service";
import {IMovieFull} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class MovieFullResolver implements Resolve<IMovieFull> {

  constructor(private movieService:MovieService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMovieFull> | Promise<IMovieFull> | IMovieFull {
    let {id} = route.params
    return this.movieService.getMovie(id);
  }
}
