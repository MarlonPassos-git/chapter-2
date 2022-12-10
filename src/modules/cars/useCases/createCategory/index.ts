import { CategoriesRepository } from '../../repositories/CategoriesRepository'
import { CreateCategoryController } from './CreateCategory.controller'
import { CreateCategoryUserCase } from './CreateCategory.useCase'

const categoriesRepository = new CategoriesRepository()
const createCategoryUseCase = new CreateCategoryUserCase(categoriesRepository)
console.log(createCategoryUseCase)
const createCategoryController = new CreateCategoryController(
	createCategoryUseCase,
)

export { createCategoryController }
