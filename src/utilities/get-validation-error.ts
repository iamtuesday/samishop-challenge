import { TypeWithKey } from "../models/type-with-key";
export const getValidationError = (errorCode: any) => {
  const config: TypeWithKey<string> = {
    ERR_NETWORK: "Network error",
    ERR_BAD_REQUEST: "Bad request",
    ERR_UNAUTHORIZED: "Unauthorized",
    ERR_FORBIDDEN: "Forbidden",
    ERR_NOT_FOUND: "Not found",
    ERR_INTERNAL_SERVER: "Internal server error",
    ERR_SERVICE_UNAVAILABLE: "Service unavailable",
    ERR_GATEWAY_TIMEOUT: "Gateway timeout",
  };

  return config[errorCode];
};
