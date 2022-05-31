import {environment} from "../../environments/environment";

const {API} = environment;
// const api-key

export const urls = {
  moviesPage: `${API}/discover/movie?page=`,
  genreList: `${API}/genre/movie/list`,
  search: `${API}/search/keyword?query=`,
  movieDetails: `${API}/movie`
}
