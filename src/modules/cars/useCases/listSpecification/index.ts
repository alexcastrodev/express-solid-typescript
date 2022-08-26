import { SpecificationRepositories } from '../../repositories/implementations/SpecificationRepository';
import { ListSpecificationController } from './ListSpecificationController';
import { ListSpecificationUseCase } from './ListSpecificationUseCase';

export const specificationRepository = SpecificationRepositories.getInstance();

export const listSpecificationUseCase = new ListSpecificationUseCase(
  specificationRepository
);

export const listSpecificationController = new ListSpecificationController(
  listSpecificationUseCase
);
