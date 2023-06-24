import axios from "axios";
import { useGlobalStore } from "./useGlobalStore";
import { errorToast } from "./errorToast";
import { browserHistory } from "./browserHistory";
import { AuthToken } from "./authToken";

const setIsLoading = useGlobalStore.getState().setIsLoading;

const texts = {
  authorizationError: "Sua sessão expirou. Por favor, entre novamente.",
};

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_PATH,
});

api.interceptors.request.use((config) => {
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
    const httpStatus = error.response.status;
    const data = error.response.data;
    if (httpStatus === 400) {
      errorToast(data.message);
    } else if (httpStatus === 401) {
      AuthToken.remove();
      errorToast(texts.authorizationError);
      browserHistory.push("/");
    }
  }
);
