import {environment} from "../../environments/environment";

const {API} = environment;

export const urls = {
  moviesPage: `${API}/discover/movie?page=`,
  genreList: `${API}/genre/movie/list`,
  search: `${API}/search/keyword?query=`,
  movieDetails: `${API}/movie`
}
