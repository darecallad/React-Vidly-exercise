import http from "./httpService";
import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";

const apiEndpoint = apiUrl + "/auth";
const tokenkey = "token";
export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, possword });
  localStorage.setItem(tokenkey, jwt);
}
export function loginWithJwt(jwt) {
  localStorage.setItem(tokenkey, jwt);
}
export function logout() {
  localStorage.removeItem(tokenkey);
}

http.setJwt(getJwt());

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenkey);
    return jwtDecode(jwt);

    // console.log(user);
    // json web token
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenkey);
}
export default {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
  getJwt,
};
