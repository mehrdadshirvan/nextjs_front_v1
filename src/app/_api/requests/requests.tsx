import http from "../httpServices";
import config from "../config.json";

const baseURL = config.BASE_URL;
const Prefix = "/api";
const Version = "/v3";
const url = baseURL + Prefix + Version;

export const SliderGetRequest = async () => (await http.get(url+'/slider')).data;
