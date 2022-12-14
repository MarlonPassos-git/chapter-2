import { Router } from 'express'
import multer from 'multer'

import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategory'

export const categoriesRoutes = Router()
export const upload = multer({
	dest: './temp',
})

categoriesRoutes.post(
	'/',
	createCategoryController.handle.bind(createCategoryController),
)

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
	const { file } = request
	console.log(file)
	return response.send()
})

categoriesRoutes.get(
	'/',
	listCategoriesController.handle.bind(listCategoriesController),
)
