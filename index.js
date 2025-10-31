const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const routes = require('./src/routes');

const app = express();
app.use(express.json());

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Sistema de Turmas e Matrículas',
      version: '1.0.0',
      description: 'Documentação da API de alunos, professores, disciplinas, turmas e matrículas.',
    },
    servers: [
      { url: 'http://localhost:3000', description: 'Servidor local' },
    ],
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(routes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
