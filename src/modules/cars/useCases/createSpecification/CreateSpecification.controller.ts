import type { Request, Response } from 'express'
import type { Controller } from '../../../../types/Controller'
import type { CreateSpecificationUseCase } from './CreateSpecification.useCase'

class CreateSpecificationController implements Controller {
	constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

	handle(request: Request, response: Response): Response {
		const { name, description } = request.body

		this.createSpecificationUseCase.execute({ name, description })

		return response.status(201).json({ message: 'Category created' })
	}
}

export { CreateSpecificationController }
