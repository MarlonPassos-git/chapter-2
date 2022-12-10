import { randomUUID } from 'node:crypto';

export interface ICategory {
  id?: string;
  name: string;
  description: string;
  created_at: Date;
}

const a = "asdf";

export class Category implements ICategory {
  id?: string;
  name: string;
  description: string;
  created_at: Date;

  constructor({ name, description, created_at }: ICategory) {
    if (!this.id) {
      this.id = randomUUID();
    }

    this.name = name;
    this.description = description;
    this.created_at = created_at;
  }
}
