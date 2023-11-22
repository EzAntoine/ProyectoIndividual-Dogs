const {Dogs}=require('../db');

module.exports=async(name, weight, height, image, life_span)=>{
    const [createdDog, created]=await Dogs.findOrCreate({where: {name, weight, height, image, life_span}});
    console.log(createdDog,created);
    if(!created)
        throw new Error('El perro ya estaba creado');
    return createdDog; 
}