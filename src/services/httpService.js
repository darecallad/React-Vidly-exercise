import axios from "axios";
import logger from "./logservice";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  const expectError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectError) {
    console.log("unexpect Error: ", error);
    toast.error("Unexpected Error");
  } else {
    toast.error("This title deleted already");
  }
  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  put: axios.put,
  post: axios.post,
  delete: axios.delete,
  get: axios.get,
  setJwt,
};
