//const swaggerAutogen = require('swagger-autogen')();
import swaggerAutogen from 'swagger-autogen';
const outputFile = './swagger.json';
// const endpointsFiles = ['./server/*.js'];
const endpointsFiles = ['./server/*.js', './server/controllers/*.js', './server/routes/*.js'];
// for index file , for files inside controllers folder and for routes folder
const config = {
    info: {
        title: 'Your API Documentation',
        description: '',
    },
    tags: [],
    host: 'localhost:3000/api',
    schemes: ['http', 'https'],
    parameters: [],
};
swaggerAutogen(outputFile, endpointsFiles, config);