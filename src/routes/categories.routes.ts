import { Router } from 'express';
import { CategoriesRepositories } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRoutes = Router();

const categoriesRespository = new CategoriesRepositories();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  const createCategoryService = new CreateCategoryService(
    categoriesRespository
  );

  createCategoryService.execute({ name, description });
  response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  response.status(200).json(categoriesRespository.list());
});

export { categoriesRoutes };
