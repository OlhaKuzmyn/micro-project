import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {IMovie} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

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
    // this.movieService.getPage(1).subscribe(value => this.movies = value.results)
    this.activatedRoute.queryParams.subscribe(value => {
      if (value['with_genres']){
        this.with_genres = value['with_genres']
        this.activatedRoute.queryParams.subscribe(({with_genres, page})=>{
          this.movieService.getByGenre(with_genres, page || 1).subscribe(value => {
            this.movies = value.results;
            this.totPages = value.total_pages
          })
        })
      } else {
        this.activatedRoute.queryParams.subscribe(({page})=>{
          this.movieService.getPage(page || 1).subscribe(value => {
            this.movies = value.results;
            this.totPages = value.total_pages
          })
        })
      }
    })
    this.activatedRoute.queryParams.subscribe(value => {
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

  nextPage() {
    this.router.navigate([''],
      {relativeTo: this.activatedRoute, queryParams: { with_genres: this.with_genres, page: this.page+=1}}
      ).then()
  }

  previousPage() {
      // this.btnDisable = false
      this.router.navigate([''],
      {relativeTo: this.activatedRoute, queryParams: { with_genres: this.with_genres, page: this.page-=1}}
      ).then()

  }

}
