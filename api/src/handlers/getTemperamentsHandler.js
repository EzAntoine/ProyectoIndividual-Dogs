const getTemperamentsController=require('../controllers/getTemperamentsController');

module.exports=async(req,res)=>{
    try {
        const allTemps=await getTemperamentsController();
        console.log(allTemps);
        if(allTemps)
            res.status(200).json(allTemps);
        else
            res.status(404).send('No se encontraron temperamentos.');        
    } catch (error) {
        res.status(400).json({error: error.message});       
    }

    
}