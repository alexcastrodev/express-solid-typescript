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

not implemented yet

### L — Liskov Substitution Principle

If we want to change where we want to store our data, we wont change the implementation, instead we will just replace the class repository

From:

```javascript
const categoriesRespository = new CategoriesRepositories();
```

To:

```javascript
const categoriesRespository = new PostgressCategoriesRepository();
```

### I — Interface Segregation Principle

We will not create a loadsa generic interfaces with useless attributes to some function, wherever we implements.

for example:

we have: ICreateCategoryDTO

Even we need id and created_at, it's not necessary include this to create function which, since we dont need them.

### D — Dependency Inversion Principle

Our CreateCategoryService really dont know where we are storing data. In-memory cache, PG, etc...

```javascript
constructor(private categoriesRepository: ICategoriesRepositories) {}
```
