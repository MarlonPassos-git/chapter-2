import { CategoriesRepository } from '../../repositories/CategoriesRepository'
import { CreateCategoryController } from './CreateCategory.controller'
import { CreateCategoryUserCase } from './CreateCategory.useCase'

const categoriesRepository = CategoriesRepository.getInstance()
const createCategoryUseCase = new CreateCategoryUserCase(categoriesRepository)

const createCategoryController = new CreateCategoryController(
	createCategoryUseCase,
)

export { createCategoryController }
