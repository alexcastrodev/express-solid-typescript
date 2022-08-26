import { Category } from '../entities/Category';
import { Specification } from '../entities/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from './implementations/SpecificationRepository.types';

class SpecificationRepositories implements ISpecificationRepository {
  private specification: Specification[];
  private static INSTACE: SpecificationRepositories;

  private constructor() {
    this.specification = [];
  }

  public static getInstance(): SpecificationRepositories {
    if (!SpecificationRepositories.INSTACE) {
      SpecificationRepositories.INSTACE = new SpecificationRepositories();
    }

    return SpecificationRepositories.INSTACE;
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
