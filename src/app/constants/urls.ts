import {environment} from "../../environments/environment";

const {API} = environment;
const pic = 'https://image.tmdb.org/t/p'

export const urls = {
  moviesPage: `${API}/discover/movie`,
  genreList: `${API}/genre/movie/list`,
  search: `${API}/search/movie`,
  movieDetails: `${API}/movie`,
  picW500: `${pic}/w500`,
  picOG: `${pic}/original`
}
