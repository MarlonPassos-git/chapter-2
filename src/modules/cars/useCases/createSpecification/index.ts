import { SpecificationRepository } from '../../repositories/SpecificationsRepository'
import { CreateSpecificationController } from './CreateSpecification.controller'
import { CreateSpecificationUseCase } from './CreateSpecification.useCase'

const categoriesRepository = SpecificationRepository.getInstance()
const createSpecificationUseCase = new CreateSpecificationUseCase(
	categoriesRepository,
)
const createSpecificationController = new CreateSpecificationController(
	createSpecificationUseCase,
)

export { createSpecificationController }
