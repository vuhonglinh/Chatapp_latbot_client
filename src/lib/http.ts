

import axios, { AxiosError } from 'axios';

class Http {
  public instance;
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://127.0.0.1:8000/api/',
      withCredentials: true
    });
    this.instance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config;
        if ('/logout' === (url || '')) {
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          localStorage.removeItem('user');
          // Cookies.remove('sessionToken', { path: '/' });
        }
        return response;
      },
      (error: AxiosError) => {
        if (error.status === 401) {
          window.location.href = '/login';
          return;
        }
        return Promise.reject(error);
      }
    );
  }
}

export const isClient = () => typeof window !== 'undefined';

export const IsAxiosError = (error: any) => {
  return error.isAxiosError || false;
}

const http = new Http().instance;

export default http;
