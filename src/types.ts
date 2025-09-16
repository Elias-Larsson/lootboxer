export interface Item {
  id: number;
  name: string;
}

export interface User {
  id: number;
  name: string;
  items: Item[];
}

export interface PageData {
  user?: User;
  error?: string;
}