import { Category } from '../models/Category';

interface ICreateCategoryDTO {
	name: string;
	description: string;
}

export class CategoriesRepository {
	private categories: Category[];

	constructor() {
		this.categories = [];
	}

	public create({ name, description }: ICreateCategoryDTO) {
		const category = new Category();

		Object.assign(category, {
			name,
			description,
			created_at: new Date(),
		});

		this.categories.push(category);
	}

	public list(): Category[] {
		return this.categories;
	}
}