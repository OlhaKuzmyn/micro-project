import { Component, OnInit } from '@angular/core';

import {MovieService} from "../../services";
import {IGenre} from "../../interfaces";

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {
  genresList: IGenre[]
  page: number = 1

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getGenreList().subscribe(value => this.genresList = value.genres)
  }

}
