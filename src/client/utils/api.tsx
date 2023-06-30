import axios from "axios";
import { useGlobalStore } from "./useGlobalStore";
import { errorToast } from "./errorToast";
import { browserHistory } from "./browserHistory";
import { AuthToken } from "./authToken";

const setIsLoading = useGlobalStore.getState().setIsLoading;

const texts = {
  authorizationError: "Your connection has expired. Please, log in",
};

export const api = axios.create({
  baseURL: "localhost:9000",
});

api.interceptors.request.use((config) => {
  // é como se fosse um middleware
  setIsLoading(true);
  const token = AuthToken.get();
  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    setIsLoading(false);
    return response;
  },
  (error) => {
    setIsLoading(false);
    // const httpStatus = error.response.status;
    //const data = error.response.data;
    // if (httpStatus === 400) {
    //     errorToast(data.message);
    //   } else if (httpStatus === 401) {
    //     AuthToken.remove();
    //     errorToast(texts.authorizationError);
    //     browserHistory.push("/");
    //   }
  }
);
