require('dotenv').config();
const {API}=process.env;
const {API_KEY}=process.env;
const axios=require('axios');

module.exports=async(id)=>{
    try {        
        const {data}=await axios.get(`${API}/${id}?api_key=${API_KEY}`)
        const {name, weight, height, image, life_span}=data;
        if(!name) throw new Error (`No se encontro raza con id: ${id}`);
        const dog={
            id,
            name,
            weight,
            height,
            life_span,
            image,
        }
        return dog;
    } catch (error) {error.message};
}