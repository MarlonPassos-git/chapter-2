import type { Request, Response } from 'express'
import { Controller } from '../../../../types/Controller'
import { CreateCategoryUserCase } from './CreateCategory.useCase'

class CreateCategoryController implements Controller {
	constructor(private createCategoryUseCase: CreateCategoryUserCase) {}

	handle(request: Request, response: Response): Response {
		const { name, description } = request.body

		this.createCategoryUseCase.execute({ name, description })

		return response.status(201).json({ message: 'Category created' })
	}
}

export { CreateCategoryController }
