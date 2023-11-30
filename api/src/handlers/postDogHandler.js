const postDogController=require('../controllers/postDogController');

module.exports=async(req,res)=>{
    const {name, minHeight, maxHeight, minWeight, maxWeight, image, life_span,temperament}=req.body;
    try {
        const newDog=await postDogController(name, minHeight, maxHeight, minWeight, maxWeight, image, life_span,temperament);
    
        res.status(200).json(newDog);
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message})
    }
}