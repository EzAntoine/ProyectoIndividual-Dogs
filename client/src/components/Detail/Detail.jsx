/* Styles */
import style from './Detail.module.css'
/* Hooks */
import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
/* Dendencies */
//import axios from 'axios';
import { getDetail } from '../../redux/actions';


const Detail=()=>{
    const {id}=useParams();
    const dispatch=useDispatch();
    const dog=useSelector(state=>state.breedDetail);
    const [dogDet,setDogDet]=useState(dog);

    useEffect(() => {
        setDogDet(dog);
    }, [dog]);

    useEffect(()=>{
        dispatch(getDetail(id));
        return setDogDet({});
    },[dispatch,id])

    return(
        <div className={style.detailContainer}>
            <div className={style.leftContent}>
                <h2>ID: {dogDet.id && dogDet.id}</h2>
                <h2>Raza: {dogDet.name && dogDet.name}</h2>
                <h2>Altura: {dogDet.height && dogDet.height}</h2>
                <h2>Peso: {dogDet.weight && dogDet.weight}</h2>
                <h2>Temperamento: {dogDet.temperament && dogDet.temperament}</h2>
                <h2>Años de vida: {dogDet.life_span && dogDet.life_span}</h2>
            </div>
            <div className={style.rightContent}>
                <img src={dogDet.image && dogDet.image} alt={dogDet.name}/>
            </div>
        </div>
    )


}



export default Detail;