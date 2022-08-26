import { inject, injectable } from 'tsyringe';
import { Category } from '../../entities/Category';
import { ICategoriesRepositories } from '../../repositories/CategoriesRepository.types';

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject('CategoriesRepositories')
    private categoriesRepository: ICategoriesRepositories
  ) {}

  async execute(): Promise<Category[]> {
    return await this.categoriesRepository.list();
  }
}

export { ListCategoriesUseCase };
