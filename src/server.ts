import express from 'express'
import { categoriesRoutes } from './routes/categories.routes'
import { specificationRoutes } from './routes/specifications.routes'

const app = express()

app.use(express.json())
app.use('/categories', categoriesRoutes)
app.use('/specifications', specificationRoutes)

const PORT = 3333

app.listen(PORT, () => {
	console.log(`🚀 server started at http://localhost:${PORT}`)
})
