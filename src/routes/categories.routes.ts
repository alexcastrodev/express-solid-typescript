import { Router } from 'express';
import { CategoriesRepositories } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

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
