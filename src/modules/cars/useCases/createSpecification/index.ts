import { SpecificationRepositories } from '../../repositories/SpecificationRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

export const specificationRepository = SpecificationRepositories.getInstance();

export const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationRepository
);

export const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);
