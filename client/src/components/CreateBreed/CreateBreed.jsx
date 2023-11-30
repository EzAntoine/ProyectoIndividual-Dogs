/* Styles */
import "./CreateBreed.module.css";
/* Hooks */
import { useState } from "react";
import { useDispatch } from "react-redux";
/* Dependencies */
import { createBreed } from "../../redux/actions";

const CreateBreed=()=>{
    const dispatch=useDispatch();

    const [input,setInput]=useState({
        name:"",
        minHeight:"",
        maxHeight:"",
        minWeight:"",
        maxWeight:"",
        life_span:"",
        temperament:"",
    });

    const [error, setError] = useState({
        name:"",
        minHeight:"",
        maxHeight:"",
        minWeight:"",
        maxWeight:"",
        life_span:"",
        temperament:"",
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
            vacio:!input.name || !input.minHeight || !input.maxHeight || !input.minWeight || !input.maxWeight || !input.life_span || !input.temperament
                ? "Por favor llenar todos los campos."
                : "",
        }))                           
      }

    const handleChange=(event)=>{
        setInput({
            ...input,
            [event.target.name]:event.target.value
        })
        validate({
            ...input,
            [event.target.name]:event.target.value,
        })
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch(createBreed(input))
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
                    <label>Temperamento: </label>
                    <input type="text" name="temperament" value={input.value} onChange={handleChange}/>
                    {<span>{error.temperament}</span>}
                </div>

                {<span>{error.vacio}</span>}
                {<button type="submit" onClick={handleSubmit} disabled={error.vacio}>Crear</button>}
            </form>
        </div>
    )

}

export default CreateBreed;