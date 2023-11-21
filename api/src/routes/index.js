const { Router } = require('express');
const getAllBreeds=require('../controllers/getAllBreeds');
const getBreedDetail=require('../controllers/getBreedDetail');
const getBreedByName=require('../controllers/getBreedByName');
const postDog=require('../controllers/postDog');
const getTemperaments=require('../controllers/getTemperaments');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//OK SOLO API.
router.get('/dogs', async(req, res)=>{ 
    try {
        const razas=await getAllBreeds();
        res.status(200).json(razas);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});

//OK. SOLO API.
router.get('/dogs/:idRaza', async(req,res)=>{ 
    const {idRaza}=req.params;
    try {
        const detail=await getBreedDetail(idRaza);
        console.log(detail);
        res.status(200).json(detail);
    } catch (error) {
        res.status(400).json({error: error.message}) 
    }
})

router.get('/dogs/name?="..."', (req,res)=>{
    const {name}=req.query;

    const breeds=getBreedByName(name);

    res.status(200).send('Obtiene todas las razas que coinciden con el nombre recibido por query')
})

router.post('/dogs', async(req,res)=>{
    const {name, weight, height, image, life_span}=req.body;
    try {
        const newDog=await postDog(name, weight, height, image, life_span);
    
        res.status(200).json(newDog);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.get('/temperaments', (req,res)=>{
    res.status(200).send('Obtiene todos los temperamentos existentes')
})

module.exports = router;
