import { Router } from 'express';
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController';

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoriesController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', listCategoryController.handle);

export { categoriesRoutes };
