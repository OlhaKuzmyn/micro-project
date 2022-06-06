import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

import {IGenresList, IMovieFull, IPage} from "../interfaces";
import {urls} from "../constants";


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getPage(params:HttpParams): Observable<IPage> {
    return this.httpClient.get<IPage>(urls.moviesPage,{params:params})
  }

  getMovie(id:number): Observable<IMovieFull> {
    return this.httpClient.get<IMovieFull>(`${urls.movieDetails}/${id}`)
  }

  getGenreList(): Observable<IGenresList> {
    return this.httpClient.get<IGenresList>(urls.genreList)
  }

  getBySearch(params:HttpParams): Observable<IPage> {
    return this.httpClient.get<IPage>(urls.search, {params:params})
  }


}
