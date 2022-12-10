/* eslint-disable */
import { Router } from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository'
import { CreateCategoryService } from '../modules/cars/services/CreteCategoryService'

export const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (req, res) => {
	const { name, description } = req.body

	const createCategoryService = new CreateCategoryService(categoriesRepository)

	createCategoryService.execute({ name, description })

	res.status(201).json({ message: 'Category created' })
})

categoriesRoutes.get('/', (_, res) => {
	const categories = categoriesRepository.list()

	res.status(200).json(categories)
})
