import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({ baseURL: "http://54.245.237.47:8867/" });
// const api = axios.create({ baseURL: "http://localhost:8860/" });

let language = "en";
api.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    if (config && config.headers) {
      const token = await sessionStorage.getItem("token");
      config.headers = {
        ...config.headers,
        "X-SHOP-Platform": "web",
        "X-SHOP-Version": "1.0.0",
        "Accept-Language": language || "en",
      };
      token && (config.headers["Authorization"] = token || "");
      return config;
    }
  },
  (error) => {
    console.log({ error });
    Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response.data.data;
  },
  async (error) => {
    console.log("error >>>", error);
    // notification.error({
    //   message:
    //     error.response && error.response.data && error.response.data.message
    //       ? error.response.data.message
    //       : "SERVER NOT FOUND",
    // });

    if (error.response && error.response.status === 401) {
      // await sessionStorage.clear();
      // window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
