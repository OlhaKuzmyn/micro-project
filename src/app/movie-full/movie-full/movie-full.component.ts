import { Component, OnInit } from '@angular/core';
import {IMovieFull} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movie-full',
  templateUrl: './movie-full.component.html',
  styleUrls: ['./movie-full.component.css']
})
export class MovieFullComponent implements OnInit {
  movie: IMovieFull;
  constructor(private activatedRoute:ActivatedRoute, private router:Router, private movieService:MovieService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['movie'] as IMovieFull;
      if (state) {
        this.movie = state
      } else {
        this.movieService.getMovie(id).subscribe(value => this.movie = value)
      }
    })
  }
}
