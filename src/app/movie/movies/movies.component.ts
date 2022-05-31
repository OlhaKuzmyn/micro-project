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
  page: number
  constructor( private movieService:MovieService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    // this.movieService.getPage(1).subscribe(value => this.movies = value.results)
    this.activatedRoute.queryParams.subscribe(({page})=>{
      this.movieService.getPage(page || 1).subscribe(value => {
        this.movies = value.results
      })
    })

  }

  pageChange(num:number) {
    this.page = num
  }
}
