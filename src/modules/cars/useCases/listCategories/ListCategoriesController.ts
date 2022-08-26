import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
  async handle(_: Request, response: Response): Promise<Response> {
    const listCategoryUseCase = container.resolve(ListCategoriesUseCase);
    const all = await listCategoryUseCase.execute();

    return response.status(200).json(all);
  }
}

export { ListCategoriesController };
