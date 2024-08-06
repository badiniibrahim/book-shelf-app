import { User } from "./user";

export interface Shelf {
  id: string;
  slug: string;
  lastModified: number;
  title: string;
  user?: User;
}
