const {Dogs}=require('../db');

module.exports=async(name, weight, height, image, life_span)=>{
    const [createdDog, created]=await Dogs.findOrCreate({where: {name, weight, height, image, life_span}});
    console.log(createdDog,created);
    if(!created)
        throw new Error(`Error al crear. ${name} ya se encontraba en la base de datos.`);
    return createdDog; 
}