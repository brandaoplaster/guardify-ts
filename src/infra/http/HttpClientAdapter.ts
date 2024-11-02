import axios, { AxiosInstance } from "axios";
import HttpClient from "./HttpClient";
import { API_URL, TOKEN } from "@/helpers/constants";

class HttpClientAdapter implements HttpClient {
  private axiosInstance: AxiosInstance | null = null;
  private static instance: HttpClientAdapter | null = null;

  constructor() {
    const baseURL = API_URL;
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  static getInstance(): HttpClient {
    if (!this.instance) {
      this.instance = new HttpClientAdapter();
    }
    return this.instance;
  }
  async get(url: string, options?: object): Promise<any> {
    return await this.axiosInstance?.get(url, options);
  }
  async post(url: string, body: object, options?: object): Promise<any> {
    return await this.axiosInstance?.post(url, body, options);
  }
  async put(url: string, body: object, options?: object): Promise<any> {
    return await this.axiosInstance?.put(url, body, options);
  }
  async delete(url: string, options?: object): Promise<any> {
    return await this.axiosInstance?.delete(url, options);
  }

  withAuthorization(): this {
    if (this.axiosInstance) {
      const token = localStorage.getItem(TOKEN);
      this.axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
    }
    return this;
  }
}

export default HttpClientAdapter.getInstance();
