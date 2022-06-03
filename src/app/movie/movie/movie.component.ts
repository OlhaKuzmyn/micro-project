import {Component, Input, OnInit} from '@angular/core';

import {IMovie} from "../../interfaces";
import {urls} from "../../constants";
import { Router} from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input()
  movie: IMovie ;
  movieP: string = urls.picW500

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  movieFull(): void {
    this.router.navigate([`movie/${this.movie.id}`],
      { state: {movie: this.movie}
      }).then()
  }
}
