import type { Category } from '../models/Category'

export interface ICategoriesRepository {
	create({ name, description }: ICreateCategoryDTO): void
	list(): Category[]
	findByName(name: string): Category | undefined
}

export interface ICreateCategoryDTO {
	name: string
	description: string
}
