/* Dependencies */
import {GET_ALL_BREEDS,GET_DETAIL,GET_BY_NAME,POST_BREED,GET_TEMPERAMENTS,FILTER_ORIGEN,FILTER_TEMPS,ORDER_AZ,ORDER_WEIGHT,RESET} from './action-types';
import axios from 'axios';

export const getAllBreeds=()=>{
    return async (dispatch)=>{
        try {
            const {data}= await axios.get(`http://localhost:3001/dogs`);
            return dispatch({
                type:GET_ALL_BREEDS,
                payload:data,
            });    
        } catch (error) {window.alert(error.message)};
    }
}

export const getDetail=(id)=>{
    return async (dispatch)=>{
        try {
            const {data}= await axios.get(`http://localhost:3001/dogs/${id}`);
            return dispatch({
                type:GET_DETAIL,
                payload:data,
            });    
        } catch (error) {window.alert(error.message)}
    }
}

export const getBreedByName=(breed)=>{
    return async (dispatch)=>{
        try {
            const {data}= await axios.get(`http://localhost:3001/dogs?name=${breed}`);
            return dispatch({
                type:GET_BY_NAME,
                payload:data,
            });    
        } catch (error) {window.alert(`No existen coincidencias con el nombre ${breed}`)};
    }
}

export const createBreed=(breed)=>{
    return async(dispatch) => {
        try {
           const {data}=await axios.post(`http://localhost:3001/dogs`, breed);
           return dispatch({
            type: POST_BREED, 
            payload: data
        });
        } catch (error) {
            return ({error: error.response.data.error})};
    };
}

export const getTemperaments=()=>{
    return async (dispatch)=>{
        try {
            const {data}= await axios.get(`http://localhost:3001/temperaments`);
            return dispatch({
                type:GET_TEMPERAMENTS,
                payload:data,
            });    
        } catch (error) {window.alert(error.message)};
    }
}

export const filterBreedsOrigen=(origen)=>{
    return {type: FILTER_ORIGEN, payload:origen}
}

export const filterTemps=(temperamento)=>{
    return {type: FILTER_TEMPS, payload:temperamento}
}

export const orderBreedsAZ=(orden)=>{
    return {type: ORDER_AZ, payload:orden}   
}

export const orderBreedsWeight=(weight)=>{
    return {type: ORDER_WEIGHT, payload:weight}   
}

export const resetFilters=()=>{
    return {type: RESET}
}