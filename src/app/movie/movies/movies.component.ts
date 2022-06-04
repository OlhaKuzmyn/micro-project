import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpParams} from "@angular/common/http";

import {MovieService} from "../../services/movie.service";
import {IMovie} from "../../interfaces";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: IMovie[]
  page: number = 1
  btnDisable: boolean = true
  btnNextDisable: boolean = false
  totRes: number
  totPages: number
  with_genres:number

  constructor( private movieService:MovieService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(value => {
      if (value['with_genres']){
        this.with_genres = value['with_genres'];
        let params = new HttpParams().set('with_genres', this.with_genres).set('page', value['page'] || this.page)
          this.movieService.getByGenre(params).subscribe(value => {
            this.movies = value.results;
            this.totPages = value.total_pages;
            this.totRes = value.total_results
          })
      } else {
        let paramsP = new HttpParams().set('page', value['page'] || this.page)
          this.movieService.getPage(paramsP).subscribe(value => {
            this.movies = value.results;
            this.totPages = value.total_pages
          })

      }

      if (isNaN(Number(value['page'])) ){
        this.page = 1
      } else {
        this.page = Number(value['page'])
      }
      if (this.page === 1) {
        this.btnDisable = true
      } else if (this.page === 500 || this.page === this.totPages){
        this.btnNextDisable = true
      } else {
        this.btnDisable = false
      }

    })
  }

  // pageChange(num:number) {
  //   this.page = num
  // }

  nextPage():void {
    this.router.navigate([],
      {relativeTo: this.activatedRoute, queryParams: { with_genres: this.with_genres, page: this.page+=1}}
      ).then()
  }

  previousPage():void {
      this.router.navigate([],
      {relativeTo: this.activatedRoute, queryParams: { with_genres: this.with_genres, page: this.page-=1}}
      ).then()
    this.btnNextDisable=false

  }

}
