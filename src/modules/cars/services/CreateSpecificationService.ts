import type { ISpecificationsRepository } from '../repositories/ISpecificatiosRepository'

interface Request {
	name: string
	description: string
}

export class CreateSpecificationService {
	constructor(private specificationsRepository: ISpecificationsRepository) {}

	execute({ name, description }: Request): void {
		const specificationAlreadyExists =
			this.specificationsRepository.findByName(name)

		if (specificationAlreadyExists) {
			throw new Error('Specification already exists!')
		}

		this.specificationsRepository.create({
			name,
			description,
		})
	}
}
