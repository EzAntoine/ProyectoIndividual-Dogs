const {Dogs, Temperaments,dogs_temperaments}=require('../db');

module.exports=async(name, weight, height, image, life_span,temperament)=>{
    if(!name || !weight || !height || !image || !life_span || !temperament)
        throw new Error('Faltan datos para crear una nueva raza.')
    
    const [createdDog, created]=await Dogs.findOrCreate({
        where: {name, weight, height, image, life_span}, 
        include: [{model: Temperaments, as: 'temperament'}]});

    if(created){
        const [newTemp,created]=await Temperaments.findOrCreate({where:{name:temperament}}); 
        await createdDog.setTemperament(newTemp);
    }
    else
        throw new Error(`Error al crear. ${name} ya se encontraba en la base de datos.`);
    return createdDog; 
}