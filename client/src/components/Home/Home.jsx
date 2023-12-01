/* Styles */
import style from "./Home.module.css";
/* Components */
import NavBar from "../NavBar/NavBar";
import Cards from "../Cards/Cards";
/* Hooks */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBreeds, getBreedByName } from "../../redux/actions";
import { useLocation } from "react-router-dom";

const Home=()=>{

    const dispatch=useDispatch();
    const allBreeds=useSelector(state=>state.allBreeds);
    const [filtrados,setFiltrados]=useState(allBreeds);
    const [searchString,setSearchString]=useState("");
    const {pathname}=useLocation();

    useEffect(() => {
        setFiltrados(allBreeds);
    }, [allBreeds]);

    const handleChange=(event)=>{
        event.preventDefault(); //Evita que se re renderice constantemente.
        setSearchString(event.target.value);
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault(); //Evita que se re renderice constantemente.
        dispatch(getBreedByName(searchString));
    }

    useEffect(()=>{
        dispatch(getAllBreeds());
        /* return(()=>{
            clearDetail() //Al desmontar, borra el detail para que no quere guardado.
        }) */
    },[dispatch])

    
    return(
        <div className={style.home}>
            {pathname!=='/' && <h2 className={style.title}>Perritos Web</h2>}
            {pathname!=='/' && <NavBar handleChange={handleChange} handleSubmit={handleSubmit}/>}
            <Cards allBreeds={filtrados}/>
        </div>
    )

}

export default Home;