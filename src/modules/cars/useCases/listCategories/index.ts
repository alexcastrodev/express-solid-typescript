import { CategoriesRepositories } from '../../repositories/CategoriesRepository';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

export const categoriesRepository = CategoriesRepositories.getInstance();

export const listCategoriesUseCase = new ListCategoriesUseCase(
  categoriesRepository
);

export const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
);
