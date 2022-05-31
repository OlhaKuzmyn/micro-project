import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from "../../interfaces";
import {MovieService} from "../../services/movie.service";
import {urls} from "../../constants";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input()
  movie: IMovie ;
  // posterPath: string = this.movie.poster_path
  // @ts-ignore
  // moviePoster: any = `${urls.picW500}${this.movie?.poster_path}`
  movieP: string = urls.picW500

  constructor( private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // this.movieService.getPoster500(this.movie.poster_path).subscribe(value => this.moviePoster = value)
  }

  movieInfo(): void {
    this.router.navigate([this.movie.id], {relativeTo: this.activatedRoute})
  }
}
