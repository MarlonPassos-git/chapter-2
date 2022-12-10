import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';
const app = express();

app.use(express.json());
app.use('/categories', categoriesRoutes);

const PORT = 3333;
console.log('cavalo');

app.get('/a', (req, res) => {
	console.log('cavalo');

	console.log(req.body);
	res.json({ message: 'Hello World' });
});

app.listen(PORT, () => {
	console.log(`🚀 server started at http://localhost:${PORT}`);
});
