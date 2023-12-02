const {Dogs, Temperaments,dogs_temperaments}=require('../db');

module.exports=async(name, minHeight, maxHeight, minWeight, maxWeight, image, life_span,temperament,origen)=>{
    if(!name || !minHeight || !maxHeight || !minWeight || !maxWeight || !image || !life_span || !temperament)
        throw new Error('Faltan datos para crear una nueva raza.')
    
    const existingDog = await Dogs.findOne({
            where: {name: name}
        });
    if(existingDog){
        throw new Error(`Error al crear. ${name} ya se encontraba en la base de datos.`);
    }      
    else{
        const [createdDog, created]=await Dogs.findOrCreate({
            where: {name, minHeight, maxHeight, minWeight, maxWeight, image, life_span,origen}, 
            include: [{model: Temperaments, as: 'temperament'}]});
    
        //Recibe temperamentos en 1 string, los separa, los almacera por separado en BD.
        if(created){
            const arrayTemps=temperament?.split(',').map(temp=>temp.trim()); //Para cada string, separo los temperamentos y borro espacios.
    
            arrayTemps.forEach(async temp=>{
                const [newTemp,createdTemp]=await Temperaments.findOrCreate({where:{name:temp}});
                await createdDog.setTemperament(newTemp);
            })
        }
        return createdDog; 
    }
        
}