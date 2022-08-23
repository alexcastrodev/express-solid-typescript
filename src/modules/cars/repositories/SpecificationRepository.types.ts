import { Category } from '../model/Category';

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

export interface ISpecificationRepository {
  findByName(name: string): Category;
  create({ name, description }: ICreateSpecificationDTO): void;
  list: () => Category[];
}
