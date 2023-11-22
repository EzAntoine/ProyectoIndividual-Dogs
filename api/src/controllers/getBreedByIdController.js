const {Dogs, Temperaments}=require('../db');
const getBreedsController=require('./getBreedsController');

module.exports=async(idRaza)=>{

    const allBreeds=await getBreedsController();
    const detail=allBreeds?.find(dog=>dog.name && dog.id===+idRaza);

    if(detail)        
        return detail;
    else{
        const detailDB=Dogs.findByPk(idRaza,{
            include: { 
                model: Temperament
                },
        });
        if(detailDB)
            return detailDB;
        else {res.status(404).send(`No existen coincidencias con el ID ${idRaza}`);}
    }

}