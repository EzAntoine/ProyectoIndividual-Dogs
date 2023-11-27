/* Hooks */
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
/* Dendencies */
//import axios from 'axios';
import { getDetail } from '../../redux/actions';
/* Styles */


const Detail=()=>{
    const {id}=useParams();
    
    useEffect(()=>{
        getDetail(id);
        /* const {data}= axios.get(`http://localhost:3001/dogs/${id}`);
        if(data.name)
            setDog(data);
        else    
            window.alert(`No existen razas con el id: ${id}`);
        
        return setDog({}); */
    },[id])

    return(
        <div>
            <div>
                <h2>ID: {dog.id && dog.id}</h2>
                <img src={dog.image && dog.image} alt={dog.name}/>
                <h2>Raza: {dog.name && dog.name}</h2>
                <h2>Altura: {dog.height && dog.height}</h2>
                <h2>Peso: {dog.weight && dog.weight}</h2>
                <h2>Temperamento: {dog.temperament && dog.temperament}</h2>
                <h2>Años de vida: {dog.life_span && dog.life_span}</h2>
            </div>
        </div>
    )


}



export default Detail;