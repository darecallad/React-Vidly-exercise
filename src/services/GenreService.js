import http from "./httpService";
import config from "../config.json";
// import { apiUrl } from "../config.jason";
export function getGenres() {
  //   return http.get();
  return http.get(config.apiUrl + "/genres");
  //  store on config.js file with link
}
