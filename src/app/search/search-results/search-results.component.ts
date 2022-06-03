import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

import {MovieService} from "../../services/movie.service";
import {IMovie} from "../../interfaces";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  form: FormGroup;
  searchRes: IMovie[];
  page: number = 1;
  query: string
  constructor(private movieService:MovieService, private router:Router, private activatedRoute:ActivatedRoute) {
    this._createForm()
  }
  ngOnInit(): void {

  }
  _createForm(): void {
    this.form = new FormGroup({
      searchword: new FormControl(null)
    })
  }

  searchMovie(): void {
    this.activatedRoute.queryParams.subscribe(({query, page})=>{
      this.query=this.form.value.searchword
      this.movieService.getBySearch(this.form.value.searchword || this.query, page || 1).subscribe(value => {
        this.searchRes = value.results
      })
      this.router.navigate([],
        {relativeTo:this.activatedRoute,queryParams: {query: this.query, page: this.page}}).then()
    })


  }
}
