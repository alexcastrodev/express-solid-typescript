import {
  ICategoriesRepositories,
  ICreateCategoryDTO,
} from '../CategoriesRepository.types';
import { Category } from '../../entities/Category';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../database';

class CategoriesRepositories implements ICategoriesRepositories {
  private repository: Repository<Category>;

  constructor() {
    this.repository = AppDataSource.getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      description,
    });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const all = await this.repository.find();
    return all;
  }

  async findByName(name: string): Promise<Category> {
    return await this.repository.findOne({
      where: {
        name,
      },
    });
  }
}

export { CategoriesRepositories };
