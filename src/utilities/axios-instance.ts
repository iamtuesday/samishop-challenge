import axios from "axios";
import { getValidationError } from "./get-validation-error";
import { SnackbarUtilities } from "./snackbar-manager";

const baseURL = import.meta.VITE_PUBLIC_API_URL;

// Crear una instancia de axios
export const axiosInstance = axios.create({
  baseURL,
});

// Interceptor de peticiones
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Starting Request", response);
    return response;
  },
  (error) => {
    SnackbarUtilities.error(getValidationError(error.code));
    console.log("Request Error", getValidationError(error.code));
    return Promise.reject(error);
  }
);
