import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

export const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (req, res) => {
	const { name, description } = req.body;

	categoriesRepository.create({ name, description });

	res.status(201).json({ message: 'Category created' });
});

categoriesRoutes.get('/', (_, res) => {
	const categories = categoriesRepository.list();

	res.status(200).json(categories);
});
