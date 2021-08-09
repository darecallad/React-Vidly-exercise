import http from "./httpService";

const apiEndpoint = "";

export function deleteMovie(movieId) {
  return http.delete(apiEndpoint + "/" + movieId);
}

export function getMovies() {
  return;

  //   return http.get('http://)
  //   http.get ( from config.js)
}
