import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface Irequest {
  name: string;
  description: string;
}
/**
 * [x] - Definitr o tipo de retorno
 * [x] - Alterar o retorno de erro
 * [x] - Acessar o Repositorio
 */

 
class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {

  }

  execute({ description, name }: Irequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

  if(categoryAlreadyExists) {
    throw  new Error("Category already exists")
  }

  this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryService }