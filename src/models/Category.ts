import { randomUUID } from 'node:crypto';

export interface ICategory {
	id?: string;
	name?: string;
	description?: string;
	created_at?: Date;
}

export class Category implements ICategory {
	id?: string;
	name?: string;
	description?: string;
	created_at?: Date;

	constructor() {
		if (!this.id) {
			this.id = randomUUID();
		}
	}
}
