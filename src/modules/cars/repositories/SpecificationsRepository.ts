import { Specification } from '../models/Specification'
import type {
	ICreateSpecificationDTO,
	ISpecificationsRepository,
} from './implementations/ISpecificatiosRepository'

class SpecificationRepository implements ISpecificationsRepository {
	private specification: Specification[]

	constructor() {
		this.specification = []
	}

	findByName(name: string): Specification | undefined {
		return this.specification.find(specification => specification.name === name)
	}

	list(): Specification[] {
		return this.specification
	}

	create({ name, description }: ICreateSpecificationDTO): void {
		const specification = new Specification()

		Object.assign(specification, {
			name,
			description,
			created_at: new Date(),
		})

		this.specification.push(specification)
	}
}

export { SpecificationRepository }
