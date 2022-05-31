import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMovie, IPage} from "../interfaces";
import {urls} from "../constants";


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getPage(page:number = 1): Observable<IPage> {
    // return this.httpClient.get<IPage>(`${urls.moviesPage}${pageNum}`)
    return this.httpClient.get<IPage>(urls.moviesPage,{params:{page}})
  }

  getMovie(id:number): Observable<IMovie> {
    return this.httpClient.get<IMovie>(`${urls.movieDetails}/${id}`)
  }

}
