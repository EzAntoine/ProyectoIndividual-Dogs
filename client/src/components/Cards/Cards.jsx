/* Styles */
import style from "./Cards.module.css";
/* Components */
import Card from "../Card/Card";

const Cards=()=>{

    return(
        <div className={style.cardsList}>
            <h2>Esta es Cards</h2>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )

}

export default Cards;