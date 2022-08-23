import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';
const app = express();

app.use(express.json());

app.use('/categories', categoriesRoutes);

app.post('/courses', (request, response) => {
  const { name } = request.body;

  return response.json({ name });
});

app.listen(3000);
