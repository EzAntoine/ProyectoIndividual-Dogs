import {GET_ALL_BREEDS,GET_DETAIL,GET_BY_NAME,POST_BREED,GET_TEMPERAMENTS,FILTER,ORDER} from './action-types';

const initialState={
    allBreeds:[],
    breedDetail:[],
    breedTemperaments:[],
    filteredBreeds:[],
    filteredTemperaments:[],
    breedsOrdered:[]
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_ALL_BREEDS:
            return{
                ...state,
                allBreeds: action.payload
            }
        case GET_DETAIL:
            return{
                ...state,
                breedDetail: action.payload
            }
        case GET_BY_NAME:
            return{
                ...state,
                allBreeds: action.payload
            }
        case POST_BREED:
            return{
                ...state,
                allBreeds:[...state.allBreeds,action.payload],
            }
        case GET_TEMPERAMENTS:
            return{
                ...state,
                breedTemperaments:action.payload,
            }
        case FILTER:
            //if(action.payload===' --- ')
            return{
                ...state,
                filteredTemperaments:action.payload,
            }
        case ORDER:
            //falta ordenar por peso
            let ordenados= action.payload==='A' 
                ? [...state.myFavorites].sort((a,b)=> a.id - b.id)  // a y b son personajes.
                : [...state.myFavorites].sort((a,b)=> b.id - a.id); // En este caso es descendente.
            
            return {
                ...state,
                breedsOrdered:ordenados,
            }
        default:
            return{
                ...state,
            }
    }
}

export default reducer;