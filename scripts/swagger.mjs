import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'My API',
    description: 'Description',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './src/swagger.json';
const endpointsFiles = ['./src/routes/index.ts'];

swaggerAutogen()(outputFile, endpointsFiles, doc);
