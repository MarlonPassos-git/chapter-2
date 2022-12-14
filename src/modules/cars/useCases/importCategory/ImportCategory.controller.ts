import type { Request, Response } from 'express'
import type { Controller } from '../../../../types/Controller'
import type { ImportCategoryUseCase } from './ImportCategory.usecase'

class ImportCategoryController implements Controller {
	constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

	handle(request: Request, response: Response): Response {
		const { file } = request

		if (!file) {
			return response.status(400).json({ error: 'File not found' })
		}

		this.importCategoryUseCase.execute(file)
		return response.send()
	}
}

export { ImportCategoryController }
