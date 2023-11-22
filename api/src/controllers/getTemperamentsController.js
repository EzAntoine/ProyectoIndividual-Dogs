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
        const arrayTemps=dog.temperament?.split(',').map(temp=>temp.trim());
        return apiTemps.concat(arrayTemps);
    },[]);
    
    const temperamentos=[...new Set(resultTemps)];
    
    temperamentos.forEach(tem=>{if(tem)Temperaments.create({name:tem})});

    return temperamentos;
}