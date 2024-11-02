import { TOKEN } from "@/helpers/constants";
import httpAdapter from "@/infra/http/HttpClientAdapter";
import { User } from "@/types/User";

export default class UserService {
  async login(email: string, password: string): Promise<any> {
    return await httpAdapter
      .post("/login", {
        email,
        password,
      })
      .then((response) => localStorage.setItem(TOKEN, response.data.token));
  }

  async getMe(): Promise<User> {
    const response = await httpAdapter
      .withAuthorization()
      .get("/me")
      .catch((error) => {
        if (error.response.status === 401) {
          localStorage.removeItem(TOKEN);
        }
      });
    const { id, name, email } = response.data;

    const user: User = {
      id,
      name,
      email,
    };
    return user;
  }
}
