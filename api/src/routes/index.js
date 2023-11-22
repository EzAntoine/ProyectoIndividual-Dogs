const { Router } = require('express');
const getBreedsController=require('../controllers/getBreedsController');
const getBreedByIdController=require('../controllers/getBreedByIdController');
const postDogController=require('../controllers/postDogController');
const getTemperamentsController=require('../controllers/getTemperamentsController');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//OK API y BD. Get by name.
router.get('/dogs', async(req, res)=>{ 
    try {
        const {name}=req.query;

        const allBreeds = await getBreedsController();
            if (name) { 
                const filtrados = await allBreeds?.filter((dog) => dog.name && dog.name.toLowerCase().includes(name.toLowerCase()));
                
                filtrados.length 
                    ? res.status(200).send(filtrados) 
                    : res.status(404).send(`No existen coincidencias con el nombre ${name}`);
            }else { 
                res.status(200).json(allBreeds);
            }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

//OK. API y DB.
router.get('/dogs/:idRaza', async(req,res)=>{ 
    const {idRaza}=req.params;
    try {
        const detail=await getBreedByIdController(idRaza);
        
        if(detail)        
            res.status(200).json(detail);
        else
            res.status(404).send(`No existen coincidencias con el ID ${idRaza}`);
    } catch (error) {
        res.status(400).json({error: error.message}) 
    }
})

router.post('/dogs', async(req,res)=>{
    const {name, weight, height, image, life_span}=req.body;
    try {
        const newDog=await postDogController(name, weight, height, image, life_span);
    
        res.status(200).json(newDog);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.get('/temperaments', (req,res)=>{
    res.status(200).send('Obtiene todos los temperamentos existentes')
})

module.exports = router;
