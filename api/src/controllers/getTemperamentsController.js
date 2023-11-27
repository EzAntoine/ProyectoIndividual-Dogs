const {Temperaments}=require('../db');
require('dotenv').config();
const {API}=process.env;
const {API_KEY}=process.env;
const axios=require('axios');
const URL=`${API}?api_key=${API_KEY}`;

module.exports=async()=>{
    const {data}=await axios.get(URL);
    const allTemps=await data.map(dog=>{
        return {
            temperament:dog.temperament,
        }
    });    

    let resultTemps=allTemps.reduce((apiTemps,dog)=>{
        const arrayTemps=dog.temperament?.split(',').map(temp=>temp.trim()); //Para cada string, separo los temperamentos y borro espacios.
        return apiTemps.concat(arrayTemps);
    },[]);
    
    resultTemps=resultTemps.filter(elem=>elem!=null); //Elimino los null.

    const temperamentos=[...new Set(resultTemps)]; //Elimino duplicados.
    
    temperamentos.forEach(tem=>{if(tem)Temperaments.findOrCreate({where: {name:tem}})}); //Guarda solo los temperamentos que no estan en la BD.
    return temperamentos;
}