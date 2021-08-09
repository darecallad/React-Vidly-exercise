import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/movies";
export function deleteMovie(movieId) {
  return http.delete(apiEndpoint + "/" + movieId);
}

export function getMovies() {
  return http.get(apiEndpoint);

  //   return http.get('http://)
  //   http.get ( from config.js)
}
