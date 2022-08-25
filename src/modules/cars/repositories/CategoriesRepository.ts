import {
  ICategoriesRepositories,
  ICreateCategoryDTO,
} from './implementations/CategoriesRepository.types';
import { Category } from '../model/Category';

class CategoriesRepositories implements ICategoriesRepositories {
  private categories: Category[];

  private static INSTANCE: CategoriesRepositories;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepositories {
    if (!CategoriesRepositories.INSTANCE) {
      CategoriesRepositories.INSTANCE = new CategoriesRepositories();
    }

    return this.INSTANCE;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      create_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    return this.categories.find((category) => category.name === name);
  }
}

export { CategoriesRepositories };
