const getBreedByIdController=require('../controllers/getBreedByIdController');

module.exports=async(req,res)=>{
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
}