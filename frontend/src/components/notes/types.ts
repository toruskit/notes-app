export interface Note {
  id: string;
  createdAt?: string;
  title?: string;
  description?: string;
  category?: string[] | string;
  color?: string;
}
