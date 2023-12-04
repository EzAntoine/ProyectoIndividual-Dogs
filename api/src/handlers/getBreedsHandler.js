const getBreedsController=require('../controllers/getBreedsController');

module.exports=async(req,res)=>{

    try {
        const {name}=req.query;
        
        const allBreeds = await getBreedsController();
        if (name) { 
            const filtrados = await allBreeds?.filter((dog) => dog.name && dog.name.toLowerCase().includes(name.toLowerCase()));
            
            res.status(200).json(filtrados); //Retorna tenga elementos o no, luego renderiza segun el contenido.
        }else { 
            res.status(200).json(allBreeds);
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}