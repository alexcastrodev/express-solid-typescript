import { Category } from '../../model/Category';
import { ICategoriesRepositories } from '../../repositories/CategoriesRepository.types';

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepositories) {}

  execute(): Category[] {
    return this.categoriesRepository.list();
  }
}

export { ListCategoriesUseCase };