const { Router } = require('express');
const getBreedsHandler = require('../handlers/getBreedsHandler');
const getBreedByIdHandler = require('../handlers/getBreedByIdHandler');
const postDogHandler = require('../handlers/postDogHandler');
const getTemperamentsHandler = require('../handlers/getTemperamentsHandler');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/dogs', getBreedsHandler);

router.get('/dogs/:idRaza', getBreedByIdHandler);

router.post('/dogs', postDogHandler);

router.get('/temperaments', getTemperamentsHandler);

module.exports = router;
