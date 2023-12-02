/* Styles */
import style from "./Home.module.css";
/* Components */
import NavBar from "../NavBar/NavBar";
import Cards from "../Cards/Cards";
/* Hooks */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBreeds, getBreedByName, getTemperaments } from "../../redux/actions";
import { useLocation } from "react-router-dom";

const Home=()=>{

    const dispatch=useDispatch();
    const allBreeds=useSelector(state=>state.allBreeds);
    const temperamentos=useSelector(state=>state.breedTemperaments
        .sort((a,b)=>{
            if(a.name<b.name)return -1;
            else return 1;
        }) //Ordeno los temperamentos para la seleccion.
    )
    const [filtrados,setFiltrados]=useState(allBreeds);
    const [searchString,setSearchString]=useState("");
    const {pathname}=useLocation();

    useEffect(() => {
        dispatch(getTemperaments());
    }, [dispatch]);

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
    },[dispatch]);

    const handleSelect=()=>{

    }

    return(
        <div className={style.home}>
            {pathname!=='/' && <h2 className={style.title}>Perritos Web</h2>}
            {pathname!=='/' && <NavBar handleChange={handleChange} handleSubmit={handleSubmit}/>}
            
            <div className={style.selectContainer}>
                <select name={'order'} onChange={handleSelect} className={style.select}>
                        <option value="A">A - Z</option>
                        <option value="D">Z - A</option>
                </select>
                <select onChange={handleSelect}>
                    <option name="filterTemps" value="defaultOption" disabled>Seleccionar</option>
                        {temperamentos.map(temp => {
                            return (                    
                                <option name={temp.name} key={temp.id}>{temp.name}</option> 
                            )
                        })
                        }
                </select>
                <select name={'filterOrigen'} onChange={handleSelect} className={style.select}>
                        <option value="todos">Todos</option>
                        <option value="api">API</option>
                        <option value="bd">Base de datos</option>
                </select>
            </div>

            <Cards allBreeds={filtrados}/>
        </div>
    )

}

export default Home;