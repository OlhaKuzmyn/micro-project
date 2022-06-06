import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import { SearchRoutingModule } from './search-routing.module';
import { SearchResultsComponent } from './search-results/search-results.component';
import {HttpModule} from "../http.module";
import {MovieService} from "../services";


@NgModule({
  declarations: [
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    MovieService
  ]
})
export class SearchModule { }
