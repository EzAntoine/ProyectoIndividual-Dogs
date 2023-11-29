/* Styles */
import style from "./Card.module.css";

const Card=({id,name,weight,temperament,image})=>{

    return(
        <div className={style.cardContainer}>
            <link to={`home/${id}`}>
                <h2>{name}</h2>
                <div className={style.imageContainer}>
                    <img className={style.dogImage} src={image} alt={name} />
                </div>
                <h2>Temperamento: {temperament}</h2>
                <h2>Peso: {weight} lb.</h2>
            </link>
        </div>
    )

}

export default Card;