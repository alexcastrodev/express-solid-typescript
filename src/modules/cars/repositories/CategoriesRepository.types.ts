import { Category } from '../entities/Category';

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepositories {
  findByName(name: string): Promise<Category>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
  list: () => Promise<Category[]>;
}
