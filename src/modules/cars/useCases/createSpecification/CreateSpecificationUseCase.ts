import { ISpecificationRepository } from './../../repositories/SpecificationRepository.types';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ name, description }: IRequest): void {
    const alreadyExists = this.specificationRepository.findByName(name);

    if (alreadyExists) {
      throw new Error('Specification already exists!');
    }

    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
