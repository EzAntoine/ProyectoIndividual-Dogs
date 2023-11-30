/* Styles */
import "./CreateBreed.module.css";
/* Hooks */
import { useState } from "react";

const CreateBreed=()=>{

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
      });

      const validate=(input)=>{
        if(!(/^[a-zA-Z]+$/).test(input.name))
            setError({...error,name:"El nombre solo puede incluir letras."});
        else
            setError({...error,name:""});
        
        if(!(/^[0-9]+$/).test(input.minHeight) || input.minHeight>=input.maxHeight)
            setError({...error,name:"La altura mínima solo puede ser un número y debe ser menor a la máxima."});
        else
            setError({...error,minHeight:""});

        if(!(/^[0-9]+$/).test(input.maxHeight) || input.minHeight>=input.maxHeight)
            setError({...error,name:"La altura máxima solo puede ser un número y debe ser mayor a la mínima."});
        else
            setError({...error,maxHeight:""});

        if(!(/^[0-9]+$/).test(input.minWeight) || input.minWeight>=input.maxWeight)
            setError({...error,name:"El peso mínimo solo puede ser un número y debe ser menor al máximo."});
        else
            setError({...error,minWeight:""});

        if(!(/^[0-9]+$/).test(input.maxWeight) || input.minWeight>=input.maxWeight)
            setError({...error,name:"El peso máximo solo puede ser un número y debe ser mayor al mínimo."});
        else
            setError({...error,maxWeight:""});


            
            
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

    return(
        <div>
            <form onSubmit={""}>
                <div>
                    <label>Nombre de raza: </label>
                    <input type="text" name="name" value={input.value} onChange={handleChange}/>
                    {<span>{error.name}</span>}
                </div>
                <div>
                    <label>Altura mínima: </label>
                    <input type="text" name="minHeight" value={input.value} onChange={handleChange}/>
                </div>                
                <div>
                    <label>Altura máxima: </label>
                    <input type="text" name="maxHeight" value={input.value} onChange={handleChange}/>
                </div>                
                <div>
                    <label>Peso mínimo: </label>
                    <input type="text" name="minWeight" value={input.value} onChange={handleChange}/>
                </div>
                <div>
                    <label>Peso máximo: </label>
                    <input type="text" name="maxWeight" value={input.value} onChange={handleChange}/>
                </div>
                <div>
                    <label>Años de vida: </label>
                    <input type="text" name="life_span" value={input.value} onChange={handleChange}/>
                </div>                
                <div>
                    <label>Temperamento: </label>
                    <input type="text" name="temperament" value={input.value} onChange={handleChange}/>
                </div>

                {/* <button onClick={handleSubmit} disabled={errors.e1 || errors.e2 || errors.e3 || errors.p1}>Submit</button> */}
            </form>
        </div>
    )

}

export default CreateBreed;