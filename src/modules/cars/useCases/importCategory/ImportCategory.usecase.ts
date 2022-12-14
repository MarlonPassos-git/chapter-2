import type { ISpecificationsRepository } from '../../repositories/implementations/ISpecificatiosRepository'

class ImportCategoryUseCase {
	execute(file: Express.Multer.File): void {
		console.log(file)
	}
}

export { ImportCategoryUseCase }
