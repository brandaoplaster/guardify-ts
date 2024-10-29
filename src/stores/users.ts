import { defineStore } from "pinia";
import UserService from "../infra/services/UserGateway";
import { User } from "../types/User";

const useSErviceUser = new UserService();

export const useUsersStore = defineStore("users", {
  state: () => ({
    me: null as null | User,
    users: [] as User[],
  }),
  getters: {
    hasUsers: (state) => state.users.length > 0,
  },
  actions: {
    async auth(email: string, password: string): Promise<User> {
      return await useSErviceUser.login(email, password);
    },
  },
});
