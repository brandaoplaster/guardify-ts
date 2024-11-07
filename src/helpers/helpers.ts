import { useUsersStore } from "@/stores/users"

export const userHasPermission = (permissionName: string): boolean => {
  const useStore = useUsersStore();
  const user = useStore.me;

  return user?.permissions?.some(permission => permission.name === permissionName) || false;
}
