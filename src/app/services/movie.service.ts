import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IGenresList, IMovieFull, IPage} from "../interfaces";
import {urls} from "../constants";


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getPage(page:number = 1): Observable<IPage> {
    return this.httpClient.get<IPage>(urls.moviesPage,{params:{page}})
  }

  getMovie(id:number): Observable<IMovieFull> {
    return this.httpClient.get<IMovieFull>(`${urls.movieDetails}/${id}`)
  }

  getGenreList(): Observable<IGenresList> {
    return this.httpClient.get<IGenresList>(urls.genreList)
  }

  getByGenre(with_genres:number, page:number = 1): Observable<IPage> {
    return this.httpClient.get<IPage>(urls.moviesPage, {params: {with_genres,page}})
  }

  getBySearch(query:string, page: number): Observable<IPage> {
    return this.httpClient.get<IPage>(urls.search, {params: {query,page}})
  }


}
