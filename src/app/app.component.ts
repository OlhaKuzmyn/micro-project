import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'micro-project';
  // movies: IMovie[]
  // constructor(private movieService: MovieService) {
  // }
  // ngOnInit(): void {
  //   this.movieService.getPage().subscribe(value => this.movies = value.results)
  // }
}
