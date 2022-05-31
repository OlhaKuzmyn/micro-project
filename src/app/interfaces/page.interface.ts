import {IMovie} from "./movie.interface";

export interface IPage {
  results: IMovie[],
  page: number,
  total_results: number,
  total_pages: number

}
