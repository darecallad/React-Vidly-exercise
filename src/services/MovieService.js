import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/movies";

function movieUrl(id) {
  return `${apiEndpoint}/${id}`;
}
export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._idl;
    http.put(movieUrl(movie._id), body);
  }

  return http.post(apiEndpoint, movie);
}

export function getMovies() {
  return http.get(apiEndpoint);

  //   return http.get('http://)
  //   http.get ( from config.js)
}
