import type { Request, Response } from 'express'
import { CreateCategoryUserCase } from './CreateCategory.useCase'

export class CreateCategoryController {
	constructor(private createCategoryUseCase: CreateCategoryUserCase) {}

	handle(request: Request, response: Response): Response {
		const { name, description } = request.body

		console.log(this)

		this.createCategoryUseCase.execute({ name, description })

		return response.status(201).json({ message: 'Category created' })
	}
}
