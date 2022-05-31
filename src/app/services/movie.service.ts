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

  getPage(pageNum:number): Observable<IPage> {
    return this.httpClient.get<IPage>(`${urls.moviesPage}${pageNum}`)
  }

  getMovie(id:number): Observable<IMovie> {
    return this.httpClient.get<IMovie>(`${urls.movieDetails}/${id}`)
  }
}
