require('dotenv').config();
const {Dogs, Temperaments, dogs_temperaments}=require('../db');
const {API}=process.env;
const {API_KEY}=process.env;
const axios=require('axios');
const URL=`${API}?api_key=${API_KEY}`;

module.exports=async()=>{
    
        const {data}=await axios.get(URL);
        
        const allBreeds=await data.map(dog=>{
            return {
                id:dog.id,
                name:dog.name,
                weight:dog.weight.imperial,
                height:dog.height.imperial,
                life_span:dog.life_span,
                image:dog.image.url,
                temperament:dog.temperament
            }
        })
        
        const breedsDB= await Dogs.findAll({
            include:{
                model: Temperaments,
                through: {model: dogs_temperaments},
                as: 'temperament',
            }
        });
        const breedsDBOrdenados=await breedsDB.map(dog=>{

            return {
                id:dog.id,
                name:dog.name,
                weight:dog.weight,
                height:dog.height,
                life_span:dog.life_span,
                image:dog.image,
                temperament:dog.temperament.map(t=>t.dataValues.name).join(', '),
            }
        }
        )

        return allBreeds.concat(breedsDBOrdenados);    
}