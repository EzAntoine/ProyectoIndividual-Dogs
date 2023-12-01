/* Styles */
import style from "./Card.module.css";
/* Dependencies*/
import { Link } from "react-router-dom";

const Card=({id,name,weight,temperament,image})=>{

    return(
        <div className={style.cardContainer}>
            <Link to={`/home/${id}`}>
                <h2>{name}</h2>                
                <div className={style.imageContainer}>
                    <img className={style.dogImage} src={image} alt={name} />
                </div>                
                <h2 className={style.atributes}>Temperamento: {temperament}</h2>
                <h2 className={style.atributes}>Peso: {weight}</h2>
            </Link>
        </div>
    )

}

export default Card;