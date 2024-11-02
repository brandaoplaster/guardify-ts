export default interface HttpClient {
  get(url: string, options?: object): Promise<any>;
  post(url: string, body: object, options?: object): Promise<any>;
  put(url: string, body: object, options?: object): Promise<any>;
  delete(url: string, options?: object): Promise<any>;
  withAuthorization(): this;
}
