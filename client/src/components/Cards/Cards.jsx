/* Styles */
import style from "./Cards.module.css";
/* Components */
import Card from "../Card/Card";
import { useState } from "react";
import { Paginate } from "../Paginate/Paginate";

const Cards=({allBreeds})=>{

    const breeds=allBreeds;
    
    const [pagina,setPagina]=useState(1);
    const [dogPorPag,setDogPorPag]=useState(8);
    let max=Math.ceil(breeds.length/dogPorPag);

    return(
        <div className={style.cardsList}>
            <div className={style.cardsListPage}>
                {(!breeds.length)
                    ? (<h3 className={style.msg}>Woof! No se encontraron coincidencias!</h3>)
                    :breeds?.slice(
                        (pagina-1)*dogPorPag, (pagina-1)*dogPorPag + dogPorPag
                        ).map(({id,name,weight,temperament,image})=>{
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

            <Paginate pagina={pagina} setPagina={setPagina} max={max}/>
        </div>
    )

}

export default Cards;