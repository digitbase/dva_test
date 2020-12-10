import Axios from "axios";
import { serverHost, port } from "../config";

let r = Axios.create({
  baseURL: `${serverHost}:${port}/`,
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
});

let request = function (url = "", options = {}) {
  return function () {
    return r({
      url,
      method: "get",
      ...options,
    });
  };
};

export default request;
