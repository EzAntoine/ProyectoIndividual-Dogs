const postDogController=require('../controllers/postDogController');

module.exports=async(req,res)=>{
    const {name, weight, height, image, life_span,temperaments}=req.body;
    try {
        const newDog=await postDogController(name, weight, height, image, life_span,temperaments);
    
        res.status(200).json(newDog);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}