import { Category } from '../../entities/Category';
import { ICategoriesRepositories } from '../../repositories/implementations/CategoriesRepository.types';

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepositories) {}

  async execute(): Promise<Category[]> {
    return await this.categoriesRepository.list();
  }
}

export { ListCategoriesUseCase };
