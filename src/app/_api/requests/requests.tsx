import http from "../httpServices";
import config from "../config.json";

const baseURL = config.BASE_URL;
const Prefix = "/api/app";
const Version = "";
const url = baseURL + Prefix + Version;

export const SliderGetRequest = async () => (await http.get('https://jsonplaceholder.typicode.com/photos')).data;
