import { Category } from '../../models/Category'
import type { ICategoriesRepository } from '../../repositories/implementations/ICategoriesRepository'

interface IRequest {
	name: string
	description: string
}

class ListCategoriesUseCase {
	constructor(private categoriesRepository: ICategoriesRepository) {}

	execute(): Category[] {
		return this.categoriesRepository.list()
	}
}

export { ListCategoriesUseCase }
