const expressSwagger = require('express-swagger-generator');

let swaggerOptions = {
    swaggerDefinition: {
        info: {
            description: 'Basic boilerplate api for node',
            title: 'Node API',
            version: '1.0.0',
        },
        host: 'localhost:7000',
        basePath: '/',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "JWT Auth key",
            }
        }
    },
    basedir: __dirname,
    files: ['./../routes/*.js', './../db/models/*.js',]
}

module.exports = app => expressSwagger(app)(swaggerOptions)
