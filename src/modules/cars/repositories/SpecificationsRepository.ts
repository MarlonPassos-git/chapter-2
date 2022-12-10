import { isNameEqual } from '../../../utils/isNameEqual'
import { Specification } from '../models/Specification'
import type {
	ICreateSpecificationDTO,
	ISpecificationsRepository,
} from './implementations/ISpecificatiosRepository'

class SpecificationRepository implements ISpecificationsRepository {
	private specification: Specification[]
	private static INSTANCE: SpecificationRepository

	private constructor() {
		this.specification = []
	}

	public static getInstance(): SpecificationRepository {
		if (!SpecificationRepository.INSTANCE) {
			SpecificationRepository.INSTANCE = new SpecificationRepository()
		}
		return SpecificationRepository.INSTANCE
	}

	findByName(name: string): Specification | undefined {
		return this.specification.find(isNameEqual(name))
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
