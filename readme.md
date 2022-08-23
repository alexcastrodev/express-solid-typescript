# S.O.L.I.D: 5 Principles of POO

## S — Single Responsiblity Principle

### Implementation

CreateCategoryService was created just only to Create a new Category.
Does not matter who will store, it can be used with mongo, pg, mysql, whatever

```
categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  const createCategoryService = new CreateCategoryService(
    categoriesRespository
  );

  createCategoryService.execute({ name, description });
  response.status(201).send();
});
```

### O — Open-Closed Principle

L — Liskov Substitution Principle (Princípio da substituição de Liskov)
I — Interface Segregation Principle (Princípio da Segregação da Interface)
D — Dependency Inversion Principle (Princípio da inversão da dependência)
