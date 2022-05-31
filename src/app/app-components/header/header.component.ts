import { Component, OnInit } from '@angular/core';
// import {IMovie} from "../../interfaces";
// import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // movies: IMovie[]
  constructor() {
  }

  ngOnInit(): void {
    //   this.movieService.getPage(1).subscribe(value => this.movies = value.results)
    // }

  }
}
