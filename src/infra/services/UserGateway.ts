import { TOKEN } from "@/helpers/constants";
import httpAdapter from "@/infra/http/HttpClientAdapter";
import { Permission } from "@/types/Permission";
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
    const { id, name, email, permissions } = response.data;

    const permission: Permission[] = permissions.map((permission: Permission) => {
      return {
      id: permission.id,
      name: permission.name,
      description: permission.description,
      }
    });

    const user: User = {
      id,
      name,
      email,
      permission,
    };
    return user;
  }
}
