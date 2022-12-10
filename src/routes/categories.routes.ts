/* eslint-disable */
import { Router } from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository'
import { createCategoryController } from '../modules/cars/useCases/createCategory'

export const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post(
	'/',
	createCategoryController.handle.bind(createCategoryController),
)

categoriesRoutes.get('/', (_, res) => {
	const categories = categoriesRepository.list()

	res.status(200).json(categories)
})
