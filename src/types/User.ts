import { Permission } from "./Permission";

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  permission: Permission[];
}
