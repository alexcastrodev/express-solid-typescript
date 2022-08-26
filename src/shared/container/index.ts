import { container } from 'tsyringe';

import { ICategoriesRepositories } from '../../modules/cars/repositories/CategoriesRepository.types';
import { CategoriesRepositories } from '../../modules/cars/repositories/implementations/CategoriesRepository';

container.registerSingleton<ICategoriesRepositories>(
  'CategoriesRepositories',
  CategoriesRepositories
);
