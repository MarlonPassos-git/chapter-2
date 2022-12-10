import { Router } from 'express';
import { randomUUID } from 'node:crypto';
import { Category } from '../models/Category';

export const categoriesRoutes = Router();
const categories: Category[] = [];

categoriesRoutes.post('/', (req, res) => {
	const { name, description } = req.body;
	const categorie = new Category({ name, description, created_at: new Date() });

	categories.push(categorie);

	res.status(201).json({ message: 'Category created' });
});

categoriesRoutes.get('/all', (_, res) => {
	res.status(200).json(categories);
});
