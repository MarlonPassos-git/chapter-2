import type { CategoriesRepository } from '../../repositories/CategoriesRepository'

interface IRequest {
	name: string
	description: string
}

export class CreateCategoryUserCase {
	constructor(private categoriesRepository: CategoriesRepository) {}

	execute({ name, description }: IRequest): void {
		if (this.categoriesRepository.hasCategoryByName(name)) {
			throw new Error('Category already exists')
		}
		this.categoriesRepository.create({ name, description })
	}
}
