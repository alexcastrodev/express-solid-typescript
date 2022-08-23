import { Router } from 'express';
import { CategoriesRepositories } from '../modules/cars/repositories/CategoriesRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationRoutes = Router();

const repository = new CategoriesRepositories();

specificationRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecificationService(repository);

  createSpecificationService.execute({ name, description });
  response.status(201).send();
});

specificationRoutes.get('/', (request, response) => {
  response.status(200).json(repository.list());
});

export { specificationRoutes };
