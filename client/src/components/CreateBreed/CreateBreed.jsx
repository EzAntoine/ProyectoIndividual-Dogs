/* Styles */
import "./CreateBreed.module.css";
/* Hooks */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom';
/* Dependencies */
import { createBreed, getTemperaments } from "../../redux/actions";

const CreateBreed=()=>{
    const dispatch=useDispatch();
    const temperamentos=useSelector(state=>state.breedTemperaments
        .sort((a,b)=>{
            if(a<b)return -1;
            else return 1;
        }) //Ordeno los temperamentos para la seleccion.
    )

    const [input,setInput]=useState({
        name:"",
        minHeight:"",
        maxHeight:"",
        minWeight:"",
        maxWeight:"",
        life_span:"",
        image:"",
        temperament:[],
    });

    const [tempsCreados, setTempCreados]=useState({
        temps:"",
    })

    const [error, setError] = useState({
        name:"",
        minHeight:"",
        maxHeight:"",
        minWeight:"",
        maxWeight:"",
        life_span:"",
        image:"",
        temperament:[],
        vacio:"Por favor llenar todos los campos.",
      });

      const validate=(input)=>{
        setError((err)=>({
            ...err,
            name:!(/^[a-zA-Z -]+$/).test(input.name)
                ? "El nombre no puede incluir números."
                : "",
            minHeight:!(/^[0-9]+$/).test(input.minHeight) || input.minHeight > input.maxHeight
                ? "La altura mínima solo puede ser un número y debe ser menor a la máxima."
                : "",
            maxHeight:!(/^[0-9]+$/).test(input.maxHeight) || input.minHeight>input.maxHeight
                ? "La altura máxima solo puede ser un número y debe ser mayor a la mínima."
                : "",
            minWeight:!(/^[0-9]+$/).test(input.minWeight) || input.minWeight>input.maxWeight
                ? "El peso mínimo solo puede ser un número y debe ser menor al máximo."
                : "",
            maxWeight:!(/^[0-9]+$/).test(input.maxWeight) || input.minWeight>input.maxWeight
                ? "El peso máximo solo puede ser un número y debe ser mayor al mínimo."
                : "",
            image:!(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/).test(input.maxWeight) || input.minWeight>input.maxWeight
                ? "Debe ingresar la URL de la imágen."
                : "",
            vacio:!input.name || !input.minHeight || !input.maxHeight || !input.minWeight || !input.maxWeight || !input.life_span || !input.temperament
                ? "Por favor llenar todos los campos."
                : "",
        }))                           
      }

    useEffect(() => {
        dispatch(getTemperaments());
    }, [dispatch]);

    const handleChange=(event)=>{
        setInput({
            ...input,
            [event.target.name]:event.target.value,
        })
        validate({
            ...input,
            [event.target.name]:event.target.value,
        })
    }

    const handleChangeTemp=(event)=>{
        setTempCreados({
            ...tempsCreados,
            temps:event.target.value,
        })
    }
   
    const handleSubmit=async (event)=>{
        event.preventDefault();
        const arraynewTemp=tempsCreados.temps.split(", ");

        const newInput={
            ...input,
            temperament:[...input.temperament,...arraynewTemp],
        }
        setInput(newInput);
        const response=await dispatch(createBreed(newInput));
        if(response.payload.id){
            window.alert(`${input.name} creado con éxito, con ID: ${response.payload.id}`);
        }
    }

    const handleSelect = (event) => {
        setInput({
            ...input,
            temperament: [...input.temperament, event.target.value]
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre de raza: </label>
                    <input type="text" name="name" value={input.value} onChange={handleChange}/>
                    {<span>{error.name}</span>}
                </div>
                <div>
                    <label>Altura mínima: </label>
                    <input type="text" name="minHeight" value={input.value} onChange={handleChange}/>
                    {<span>{error.minHeight}</span>}
                </div>                
                <div>
                    <label>Altura máxima: </label>
                    <input type="text" name="maxHeight" value={input.value} onChange={handleChange}/>
                    {<span>{error.maxHeight}</span>}
                </div>                
                <div>
                    <label>Peso mínimo: </label>
                    <input type="text" name="minWeight" value={input.value} onChange={handleChange}/>
                    {<span>{error.minWeight}</span>}
                </div>
                <div>
                    <label>Peso máximo: </label>
                    <input type="text" name="maxWeight" value={input.value} onChange={handleChange}/>
                    {<span>{error.maxWeight}</span>}
                </div>
                <div>
                    <label>Años de vida: </label>
                    <input type="text" name="life_span" value={input.value} onChange={handleChange}/>
                    {<span>{error.life_span}</span>}
                </div>    
                <div>
                    <label>URL de la imágen: </label>
                    <input type="text" name="image" value={input.value} onChange={handleChange}/>
                    {<span>{error.image}</span>}
                </div>                
                <div>
                    <label>Temperamento: </label>
                    <input type="text" name="temperament" value={input.value} onChange={handleChangeTemp}/>
                    {<span>{error.temperament}</span>}
                    <div>
                        <label>Seleccionar Temperamentos: </label>
                        <select onChange={handleSelect}>
                            <option value="defaultOption" disabled>Seleccionar</option>
                                {temperamentos.map(temp => {
                                    return (                    
                                        <option name={temp} key={temp}>{temp}</option> 
                                    )
                                    })
                                }
                        </select>
                        <span>Temperamentos Seleccionados: {input.temperament.map(t=>(
                            <div key={t}>
                                <p>{t}</p>
                            </div>))}
                        </span>
                    </div>
                </div>

                {<span>{error.vacio}</span>}
                <Link to="/home">
                <button>Cancel</button>
                </Link>
                {<button type="submit" onClick={handleSubmit} disabled={error.vacio}>Crear</button>}
            </form>
        </div>
    )

}

export default CreateBreed;