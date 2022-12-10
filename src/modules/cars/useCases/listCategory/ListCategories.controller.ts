import { Request, Response } from 'express'
import { Controller } from '../../../../types/Controller'
import { ListCategoriesUseCase } from './ListCategories.useCase'

class ListCategoriesController implements Controller {
	constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

	handle(request: Request, response: Response): Response {
		const all = this.listCategoriesUseCase.execute()

		return response.json(all)
	}
}

export { ListCategoriesController as ListCategoiesController }
