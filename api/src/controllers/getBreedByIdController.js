const {Dogs, Temperaments, dogs_temperaments}=require('../db');
const getBreedsController=require('./getBreedsController');

module.exports=async(idRaza)=>{

    const allBreeds=await getBreedsController();
    const detail=allBreeds?.find(dog=>dog.name && dog.id===+idRaza);

    if(detail)        
        return detail;
    else{
        const detailDB=await Dogs.findByPk(idRaza,{
            include: { 
                model: Temperaments,
                through: { model: dogs_temperaments },
                as: 'temperament',
                attributes: ['name'],
                },
        });

        if(detailDB){
            console.log(detailDB);
                return {
                    id:detailDB.id,
                    name:detailDB.name,
                    weight:`${detailDB.minWeight} - ${detailDB.maxWeight}`,
                    height:`${detailDB.minHeight} - ${detailDB.maxHeight}`,
                    life_span:detailDB.life_span,
                    image:detailDB.image,
                    temperament:detailDB.temperament.map(t=>t.dataValues.name).join(', '),
                    origen:detailDB.origen,
                }
            }
            else {throw new Error(`No existen coincidencias con el ID ${idRaza}`)};
        }
    }
