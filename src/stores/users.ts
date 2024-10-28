import { defineStore } from "pinia";
import UserService from "../infra/services/UserGateway";

const useSErviceUser = new UserService();

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: [],
  }),
  getters: {
    hasUsers: (state) => state.users.length > 0,
  },
  actions: {
    auth(email: string, password: string): Promise<any> {
      return useSErviceUser.login(email, password);
    },
  },
});
