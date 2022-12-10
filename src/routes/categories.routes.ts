import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

export const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (req, res) => {
	const { name, description } = req.body;

	const categoryAlreadyExists = categoriesRepository.findByName(name);

	if (categoryAlreadyExists) {
		return res.status(400).json({ error: 'Category already exists' });
	}
	categoriesRepository.create({ name, description });

	res.status(201).json({ message: 'Category created' });
});

categoriesRoutes.get('/', (_, res) => {
	const categories = categoriesRepository.list();

	res.status(200).json(categories);
});
