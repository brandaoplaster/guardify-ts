import { Permission } from "./Permission";

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  permissions: Permission[];
}
