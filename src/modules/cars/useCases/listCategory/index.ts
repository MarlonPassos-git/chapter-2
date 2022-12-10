import { CategoriesRepository } from '../../repositories/CategoriesRepository'
import { ListCategoiesController } from './ListCategories.controller'
import { ListCategoriesUseCase } from './ListCategories.useCase'

const categoriesRepository = CategoriesRepository.getInstance()
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository)
const listCategoriesController = new ListCategoiesController(
	listCategoriesUseCase,
)

export { listCategoriesController }
