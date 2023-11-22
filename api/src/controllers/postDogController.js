const {Dogs, Temperaments}=require('../db');

module.exports=async(name, weight, height, image, life_span,temperament)=>{
    const [createdDog, created]=await Dogs.findOrCreate({where: {name, weight, height, image, life_span}});

    if(created){
        const newTemp=await Temperaments.create({name:temperament}); 
        await createdDog.setTemperaments(newTemp);
    }
    else
        throw new Error(`Error al crear. ${name} ya se encontraba en la base de datos.`);
    return createdDog; 
}