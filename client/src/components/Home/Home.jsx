/* Styles */
import style from "./Home.module.css";
/* Components */
import NavBar from "../NavBar/NavBar";
import Cards from "../Cards/Cards";
/* Hooks */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBreeds, getBreedByName, getTemperaments, filterBreedsOrigen, filterTemps, orderBreedsAZ, orderBreedsWeight } from "../../redux/actions";
import { useLocation } from "react-router-dom";

const Home=()=>{

    const dispatch=useDispatch();
    const copyBreeds=useSelector(state=>state.copyBreeds);
    const filtroOrig=useSelector(state=>state.filtroOrig);
    const filtroTemps=useSelector(state=>state.filtroTemps);
    const filtroCombinado=useSelector(state=>state.filtroCombinado);
    const temperamentos=useSelector(state=>state.allTemperaments
        .sort((a,b)=>{
            if(a.name<b.name)return -1;
            else return 1;
        }) //Ordeno los temperamentos para la seleccion.
    )
    const {pathname}=useLocation();

    useEffect(() => {
        dispatch(getTemperaments());
    }, [dispatch]);

    useEffect(()=>{
        dispatch(getAllBreeds());
    },[dispatch]);
    
    const handleChange=(event)=>{
        event.preventDefault(); //Evita que se re renderice constantemente.
        dispatch(getBreedByName(event.target.value));
    }
    
    /* HandleSubmit correspondiente al boton de busqueda (lupa), de NavBar.
        const handleSubmit=(event)=>{
        event.preventDefault(); //Evita que se re renderice constantemente.
        dispatch(getBreedByName(event.target.value));
    } */

    const handleSelect=(event)=>{
        if(event.target.name==="orderAZ")
            if(event.target.value!=="defaultOption")
                dispatch(orderBreedsAZ(event.target.value));
        if(event.target.name==="orderWeight")
            if(event.target.value!=="defaultOption")
                dispatch(orderBreedsWeight(event.target.value));
        if(event.target.name==="filterTemp")
            dispatch(filterTemps(event.target.value));
        if(event.target.name==="filterOrigen")
            dispatch(filterBreedsOrigen(event.target.value));
    }

    return(
        <div className={style.home}>
            {pathname!=='/' && <h2 className={style.title}>Perritos Web</h2>}
            {pathname!=='/' && <NavBar handleChange={handleChange} /* handleSubmit={handleSubmit} *//>}
            
            <div className={style.selectContainer}>
                <select name={'orderAZ'} onChange={handleSelect} className={style.select}>
                        <option value="defaultOption">Ordenar Alfabeticamente</option>
                        <option value="A">A - Z</option>
                        <option value="Z">Z - A</option>
                </select>
                <select name={'orderWeight'} onChange={handleSelect} className={style.select}>
                        <option value="defaultOption">Ordenar por Peso</option>
                        <option value="min">Menor Peso</option>
                        <option value="max">Mayor Peso</option>
                </select>
                <select name={'filterTemp'} onChange={handleSelect} className={style.select}>
                    <option value="all">Todos los Temperamentos</option>
                        {temperamentos.map(temp => {
                            if(temp!=="")
                                return (<option name={temp.name} key={temp.id}>{temp.name}</option>)
                            else
                                return ''})
                        }
                </select>
                <select name={'filterOrigen'} onChange={handleSelect} className={style.select}>
                        <option value="all">Todos los Origenes</option>
                        <option value="API">API</option>
                        <option value="BD">Base de datos</option>
                </select>
            </div>
            
            {!filtroOrig.length && !filtroTemps.length 
                ? <Cards allBreeds={copyBreeds}/> 
                : <Cards allBreeds={filtroCombinado}/> 
            }

            
        </div>
    )

}

export default Home;