/* Styles */
import style from "./Card.module.css";

const Card=({id,name,weight,temperament,image})=>{

    return(
        <div className={style.cardContainer}>
            <h2>{name}</h2>
            <div className={style.imageContainer}>
                <img className={style.dogImage} src={image} alt={name} />
            </div>
            <h2>Temperamento: {temperament}</h2>
            <h2>Peso: {weight} kg</h2>
        </div>
    )

}

export default Card;