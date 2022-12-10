import { Router } from 'express'
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService'
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationsRepository'

export const specificationRoutes = Router()
const specificationsRepository = new SpecificationRepository()
const createSpecificationService = new CreateSpecificationService(
	specificationsRepository,
)

specificationRoutes.post('/', (req, res) => {
	const { name, description } = req.body

	createSpecificationService.execute({ name, description })

	res.status(201).json({ message: 'Category created' })
})
