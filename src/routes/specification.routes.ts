import { listSpecificationController } from './../modules/cars/useCases/listSpecification/index';
import { createSpecificationController } from './../modules/cars/useCases/createSpecification/index';
import { Router } from 'express';

const specificationRoutes = Router();

specificationRoutes.post('/', (request, response) =>
  createSpecificationController.handle(request, response)
);

specificationRoutes.get('/', (request, response) =>
  listSpecificationController.handle(request, response)
);

export { specificationRoutes };
