const {Dogs}=require('../db');

module.exports=async(name, weight, height, image, life_span)=>{
    return await Dogs.create({name, weight, height, image, life_span});
}