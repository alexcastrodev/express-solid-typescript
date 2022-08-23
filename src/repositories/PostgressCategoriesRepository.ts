import { Category } from '../model/Category';
import {
  ICategoriesRepositories,
  ICreateCategoryDTO,
} from './CategoriesRepository.types';

class PostgressCategoriesRepositories implements ICategoriesRepositories {
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description);
    return null;
  }
  list: () => [];
}

export { PostgressCategoriesRepositories };
