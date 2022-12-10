import { Router } from 'express'
import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategory'

export const categoriesRoutes = Router()

categoriesRoutes.post(
	'/',
	createCategoryController.handle.bind(createCategoryController),
)

categoriesRoutes.get(
	'/',
	listCategoriesController.handle.bind(listCategoriesController),
)
