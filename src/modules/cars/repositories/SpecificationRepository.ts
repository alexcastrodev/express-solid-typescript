import { Category } from '../model/Category';
import { Specification } from '../model/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from './implementations/SpecificationRepository.types';

class SpecificationRepositories implements ISpecificationRepository {
  private specification: Specification[];

  constructor() {
    this.specification = [];
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      create_at: new Date(),
    });

    this.specification.push(category);
  }

  list(): Category[] {
    return this.specification;
  }

  findByName(name: string): Category {
    return this.specification.find((category) => category.name === name);
  }
}

export { SpecificationRepositories };
