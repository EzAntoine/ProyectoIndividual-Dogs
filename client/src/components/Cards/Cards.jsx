/* Styles */
import style from "./Cards.module.css";
/* Components */
import Card from "../Card/Card";

const Cards=({allBreeds})=>{

    const breeds=allBreeds;

    return(
        <div className={style.cardsList}>
            {breeds?.map(({id,name,weight,temperament,image})=>{
                if(id){
                    return (<Card 
                        key={id}
                        id={id}
                        name={name}
                        weight={weight}
                        temperament={temperament}
                        image={image}
                    />)
                }else return "";
            })
            }
        </div>
    )

}

export default Cards;