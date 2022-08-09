import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpParams} from "@angular/common/http";

import {MovieService} from "../../services";
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
  query: string;

  totPages:number

  constructor(private movieService:MovieService, private router:Router, private activatedRoute:ActivatedRoute) {
    this._createForm()
  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(value => {
      if (isNaN(Number(value['page'])) ){
        this.page = 1
      } else {
        this.page = Number(value['page'])
      }
    })

  }
  _createForm(): void {
    this.form = new FormGroup({
      searchword: new FormControl(null, [Validators.required])
    })
  }

  searchMovie(): void {
    this.activatedRoute.queryParams.subscribe(({query, page})=>{
      this.query=this.form.value.searchword
      let params = new HttpParams().set('query', this.query).set('page', this.page)
      this.movieService.getBySearch(params).subscribe(value => {
        this.searchRes = value.results;
        this.totPages = value.total_pages
      })
      this.router.navigate([],
        {relativeTo:this.activatedRoute,queryParams: {query: this.query, page: this.page}}).then()

    })
  }

  nextPage():void {
    this.router.navigate([],
      {relativeTo: this.activatedRoute, queryParams: {page: this.page+=1}}
    ).then()
  }

  previousPage():void {
    this.router.navigate([],
      {relativeTo: this.activatedRoute, queryParams: {page: this.page-=1}}
    ).then()

  }

  toMovie(id:number):void {
    this.router.navigate(['/movie/'+id]).then()
  }
}
