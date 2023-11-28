/* Styles */
import style from "./Card.module.css";

const Card=()=>{

    return(
        <div className={style.cardContainer}>
            <h2>Raza:</h2>
            <h2>Temperamento:</h2>
            <h2>Peso</h2>
            {/* <img src={image} alt={name} /> */}

        </div>
    )

}

export default Card;