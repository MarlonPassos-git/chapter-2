import { Category } from '../models/Category'
import type {
	ICategoriesRepository,
	ICreateCategoryDTO,
} from './ICategoriesRepository'
export class CategoriesRepository implements ICategoriesRepository {
	private categories: Category[]
	private static INSTANCE: CategoriesRepository

	private constructor() {
		this.categories = []
	}

	public static getInstance(): CategoriesRepository {
		if (!CategoriesRepository.INSTANCE) {
			CategoriesRepository.INSTANCE = new CategoriesRepository()
		}
		return CategoriesRepository.INSTANCE
	}

	public create({ name, description }: ICreateCategoryDTO) {
		const category = new Category()

		Object.assign(category, {
			name,
			description,
			created_at: new Date(),
		})

		this.categories.push(category)
	}

	public list(): Category[] {
		return this.categories
	}

	public findByName(name: string) {
		function nameIsEqual(category: Category) {
			return category.name === name
		}

		return this.categories.find(nameIsEqual)
	}
}
