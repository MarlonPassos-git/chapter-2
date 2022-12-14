import { ImportCategoryController } from './ImportCategory.controller'
import { ImportCategoryUseCase } from './ImportCategory.usecase'

const importCategoryUseCase = new ImportCategoryUseCase()
const importCategoryController = new ImportCategoryController(
	importCategoryUseCase,
)

export { importCategoryController }
