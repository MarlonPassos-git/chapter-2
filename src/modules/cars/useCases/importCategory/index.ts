import { CategoriesRepository } from '../../repositories/CategoriesRepository'
import { ImportCategoryController } from './ImportCategory.controller'
import { ImportCategoryUseCase } from './ImportCategory.usecase'

const categoriesRepository = CategoriesRepository.getInstance()
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository)
const importCategoryController = new ImportCategoryController(
	importCategoryUseCase,
)

export { importCategoryController }
