import {GET_ALL_BREEDS,GET_DETAIL,GET_BY_NAME,POST_BREED,GET_TEMPERAMENTS,FILTER_ORIGEN,FILTER_TEMPS,ORDER_AZ,ORDER_WEIGHT} from './action-types';

const initialState={
    allBreeds:[],
    copyBreeds:[],
    breedDetail:[],
    allTemperaments:[],
    filteredBreeds:[],
    filteredTemperaments:[],
    breedsOrdered:[]
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_ALL_BREEDS:
            return{
                ...state,
                allBreeds: action.payload,
                copyBreeds: action.payload,
            }
        case GET_DETAIL:
            return{
                ...state,
                breedDetail: action.payload
            }
        case GET_BY_NAME:
            return{
                ...state,
                copyBreeds: action.payload
            }
        case POST_BREED:
            return{
                ...state,
                allBreeds:[...state.allBreeds,action.payload],
            }
        case GET_TEMPERAMENTS:
            return{
                ...state,
                allTemperaments:action.payload,
            }
        case FILTER_ORIGEN:
            if(action.payload==='all')
                return{
                    ...state,
                    copyBreeds:state.allBreeds,
            }
            else{
                const filterByOrigen= [...state.allBreeds].filter((dog)=>{
                    return (dog.origen===action.payload);
                });
                return{
                    ...state,
                    copyBreeds: filterByOrigen,
                }
            }
        case FILTER_TEMPS:
            if(action.payload==='all')
                return{
                    ...state,
                    copyBreeds:state.allBreeds,
            }
            else{
                const filterByTemp= [...state.allBreeds].filter((dog)=>{
                    return (dog.temperament?.includes(action.payload));
                });
                return{
                    ...state,
                    copyBreeds: filterByTemp,
                }
            }
        case ORDER_AZ:
            let orderAZ= action.payload==='A' 
                ? [...state.copyBreeds].sort((a,b)=> a.name.localeCompare(b.name))  // a y b son dogs.
                : [...state.copyBreeds].sort((a,b)=> b.name.localeCompare(a.name)); // En este caso es descendente.
            
            return {
                ...state,
                copyBreeds:orderAZ,
            }
        case ORDER_WEIGHT:
            let orderWeight= action.payload==='min' 
                ? [...state.copyBreeds].sort((a,b)=> a.weight.split('-')[0] - b.weight.split('-')[0])  // a y b son dogs.
                : [...state.copyBreeds].sort((a,b)=> b.weight.split('-')[0] - a.weight.split('-')[0]); // En este caso es descendente.
            
            return {
                ...state,
                copyBreeds:orderWeight,
            }
        default:
            return{
                ...state,
            }
    }
}

export default reducer;