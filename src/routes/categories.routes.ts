import { Router } from 'express'
import multer from 'multer'

import {
	createCategoryController,
	listCategoriesController,
	importCategoryController,
} from '../modules/cars/useCases'

export const categoriesRoutes = Router()
export const upload = multer({
	dest: './temp',
})

categoriesRoutes.post(
	'/',
	createCategoryController.handle.bind(createCategoryController),
)

categoriesRoutes.post(
	'/import',
	upload.single('file'),
	importCategoryController.handle.bind(importCategoryController),
)

categoriesRoutes.get(
	'/',
	listCategoriesController.handle.bind(listCategoriesController),
)
