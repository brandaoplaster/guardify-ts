import { TOKEN } from "../../helpers/constants";
import httpAdapter from "../http/HttpClientAdapter";

export default class UserService {
  async login(email: string, password: string): Promise<any> {
    return await httpAdapter.post("/login", {
      email,
      password,
    })
    .then(response => localStorage.setItem(TOKEN, response.data.token))
  }
}
