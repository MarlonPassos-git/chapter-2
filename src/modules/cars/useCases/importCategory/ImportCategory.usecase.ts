import { createReadStream } from 'node:fs'
import { Parser } from 'csv-parse'
import type { CategoriesRepository } from '../../repositories/CategoriesRepository'

interface IImportCategory {
	name: string
	description: string
}

class ImportCategoryUseCase {
	constructor(private categoriesRepository: CategoriesRepository) {}

	#loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
		return new Promise<IImportCategory[]>((resolve, reject) => {
			const stream = createReadStream(file.path)
			const categories: IImportCategory[] = []
			const parseFile = new Parser({})
			stream.pipe(parseFile)

			parseFile
				.on('data', pushLineToCategories)
				.on('end', resolveAndSendCategories)
				.on('error', rejectAndSendError)

			function resolveAndSendCategories() {
				resolve(categories)
			}

			function rejectAndSendError(error: Error) {
				reject(error)
			}

			function pushLineToCategories(line: string[]) {
				const [name, description] = line
				categories.push({ name, description })
			}
		})
	}

	async execute(file: Express.Multer.File) {
		const categories = await this.#loadCategories(file)

		categories.map(this.#setCategoriesInRepository.bind(this))
	}

	#setCategoriesInRepository(categories: IImportCategory) {
		const { name, description } = categories

		const categoryAlreadyExists = this.categoriesRepository.findByName(name)

		if (categoryAlreadyExists) return

		this.categoriesRepository.create({ name, description })
	}
}

export { ImportCategoryUseCase }
