import { User } from "../../types/User";
import httpAdapter from "../http/HttpClientAdapter";

export default class UserService {
  async login(email: string, password: string): Promise<User> {
    return await httpAdapter.post("/login", {
      email,
      password,
    });
  }
}
