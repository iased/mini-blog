import { User } from "./user.model";

export interface Post {
  id?: number;
  user_id?: number;
  user?: User;
  title: string;
  message: string;
  created_at?: any;
  updated_at?: string;
}