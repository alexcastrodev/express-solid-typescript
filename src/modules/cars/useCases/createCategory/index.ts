import { CategoriesRepositories } from '../../repositories/CategoriesRepository';
import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

export const categoriesRepository = CategoriesRepositories.getInstance();

export const createCategoryUseCase = new CreateCategoryUseCase(
  categoriesRepository
);

export const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);
