import axios from "axios";
import config from "./config.json";

const getLocalAccessToken = () => {
    return localStorage.getItem("localAccessToken");
};

const instance = axios.create({
    baseURL: config["BASE_URL"],
    headers: {
        "Accept": "*/*",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data",
    },
});

instance.interceptors.request.use(
    (config) => {
        const token = getLocalAccessToken();
        if (token) {
            config.headers!["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        if (err.response.status === 401) {
            localStorage.clear();
            window.location.href = "/auth/login";
        }
        // if (err.response.status === 301) {
        //     localStorage.clear();
        //     window.location.href = "/panel/personal-info";
        // }
        if (err.response) {
          // Access Token was expired
          if (err.response.status === 403 && err.response.data) {
            return Promise.reject(err.response.data);
          }
          if (err.code==="ERR_NETWORK") {
              console.log("اتصال اینترنت خود را بررسی نمایید")
          }
        }
        return Promise.reject(err);
    }
);

export default {
    get: instance.get,
    post: instance.post,
    put: instance.put,
    delete: instance.delete,
    patch: instance.patch,
};
