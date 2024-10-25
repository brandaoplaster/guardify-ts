import httpAdapter from "../http/HttpClientAdapter";

export default class UserService {
  async login(email: string, password: string): Promise<any> {
    await httpAdapter.post("/login", {
      email,
      password,
    });
  }
}
