import axios from "axios";

export const api = axios.create({
  baseURL: "https://vexere-api-060197.herokuapp.com/api/"
});
