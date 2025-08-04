import { XiorResponse } from "xior";
import xiorClient from "./xior";

const BACKEND_URL = "/api"; // Usa il proxy Next.js invece del backend diretto

interface Response {
  success: boolean;
  user?: any;
  error?: string;
}

interface AuthApi {
  login: (email: string, password: string) => Promise<XiorResponse<Response>>;
  logout: (headers?: Headers) => Promise<XiorResponse<Response>>;
  verifyAccessToken: (headers?: Headers) => Promise<XiorResponse<Response>>;
  refreshAccessToken: (headers?: Headers) => Promise<XiorResponse<Response>>;
}

export const authApi = (): AuthApi => {
  return {
    login,
    logout,
    verifyAccessToken,
    refreshAccessToken,
  };
};

const login = (email: string, password: string) => {
  return xiorClient.post<Response>(`${BACKEND_URL}/auth/sign-in`, { email, password });
};

const logout = (headers?: Headers) => {
  return xiorClient.get<Response>(`${BACKEND_URL}/auth/logout`, { headers });
};

const verifyAccessToken = (headers?: Headers) => {
  return xiorClient.get<Response>(`${BACKEND_URL}/verify`, { headers });
};

const refreshAccessToken = (headers?: Headers) => {
  return xiorClient.get<Response>(`${BACKEND_URL}/auth/refresh`, { headers });
};
