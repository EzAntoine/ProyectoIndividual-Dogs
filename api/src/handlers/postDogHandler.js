const postDogController=require('../controllers/postDogController');

module.exports=async(req,res)=>{
    const {name, minHeight, maxHeight, minWeight, maxWeight, image, life_span,temperament}=req.body;
    try {
        const temperamentString=temperament.join(", "); //Transforma el array de temperamentos en un String.
        const origen="BD";
        const newDog=await postDogController(name, minHeight, maxHeight, minWeight, maxWeight, image, life_span,temperamentString,origen);
    
        res.status(200).json(newDog);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}