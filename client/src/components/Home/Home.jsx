/* Styles */
import style from "./Home.module.css";
/* Components */
import NavBar from "../NavBar/NavBar";
import Cards from "../Cards/Cards";
/* Hooks */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBreeds } from "../../redux/actions";

const Home=()=>{

    const dispatch=useDispatch();
    const allBreeds=useSelector(state=>state.allBreeds);

    useEffect(()=>{
        dispatch(getAllBreeds());
        /* return(()=>{
            clearDetail() //Al desmontar, borra el detail para que no quere guardado.
        }) */
    },[dispatch])

    return(
        <div className={style.home}>
            <h2 className={style.title}>Esta es la Home</h2>
            <NavBar/>
            <Cards allBreeds={allBreeds}/>
        </div>
    )

}

export default Home;