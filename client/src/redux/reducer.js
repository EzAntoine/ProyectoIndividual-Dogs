import {GET_ALL_BREEDS,GET_DETAIL,GET_BY_NAME,POST_BREED,GET_TEMPERAMENTS,FILTER_ORIGEN,FILTER_TEMPS,ORDER_AZ,ORDER_WEIGHT} from './action-types';

const initialState={
    allBreeds:[],
    copyBreeds:[],
    filtroOrig:[],
    filtroTemps:[],
    filtroCombinado:[],
    breedDetail:[],
    allTemperaments:[],
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
            if(action.payload==='all'){
                if(state.filtroTemps.length){
                    return{
                        ...state,
                        filtroCombinado:state.filtroTemps,
                        copyBreeds:state.filtroCombinado,
                        filtroOrig:[]
                    }
                }else{
                    return{
                        ...state,
                        copyBreeds:state.allBreeds,
                        filtroOrig:[],
                        filtroCombinado:[]
                    }
                }
            }
            else{
                let filterByOrigen=[];
                if(state.filtroTemps.length){
                    filterByOrigen=[...state.filtroTemps].filter((dog)=>{
                        return (dog.origen===action.payload);
                    });
                }else{
                   filterByOrigen=[...state.allBreeds].filter((dog)=>{
                        return (dog.origen===action.payload);
                    }); 
                }
                return{
                    ...state,
                    filtroOrig:filterByOrigen,
                    filtroCombinado: filterByOrigen,
                }
            }
        case FILTER_TEMPS:
            if(action.payload==='all'){
                if(state.filtroOrig.length){
                    return{
                        ...state,
                        filtroCombinado:state.filtroOrig,
                        copyBreeds:state.filtroCombinado,
                        filtroTemps:[]
                    }
                }else{
                    return{
                        ...state,
                        copyBreeds:state.allBreeds,
                        filtroTemps:[],
                        filtroCombinado:[]
                    }
                }
            }
            else{
                let filterByTemp=[];
                if(state.filtroOrig.length){
                    filterByTemp=[...state.filtroOrig].filter((dog)=>{
                        return (dog.temperament?.includes(action.payload));
                    });  
                } else{
                    filterByTemp=[...state.allBreeds].filter((dog)=>{
                        return (dog.temperament?.includes(action.payload));
                    }); 
                }
                return{
                    ...state,
                    filtroTemps:filterByTemp,
                    filtroCombinado: filterByTemp,
                }
            }
        case ORDER_AZ:
            if(!state.filtroCombinado.length){
                let orderAZ= action.payload==='A' 
                    ? [...state.copyBreeds].sort((a,b)=> a.name.localeCompare(b.name))  // a y b son dogs.
                    : [...state.copyBreeds].sort((a,b)=> b.name.localeCompare(a.name)); // En este caso es descendente.
                
                return {
                    ...state,
                    copyBreeds:orderAZ,
                }
            }else{
                let orderAZ= action.payload==='A' 
                    ? [...state.filtroCombinado].sort((a,b)=> a.name.localeCompare(b.name))  // a y b son dogs.
                    : [...state.filtroCombinado].sort((a,b)=> b.name.localeCompare(a.name)); // En este caso es descendente.
                
                return {
                    ...state,
                    filtroCombinado:orderAZ,
                }
            }
        case ORDER_WEIGHT:
            if(!state.filtroCombinado.length){
                let orderWeight= action.payload==='min' 
                    ? [...state.copyBreeds].sort((a,b)=> a.weight.split('-')[0] - b.weight.split('-')[0])  // a y b son dogs.
                    : [...state.copyBreeds].sort((a,b)=> b.weight.split('-')[0] - a.weight.split('-')[0]); // En este caso es descendente.
                
                return {
                    ...state,
                    copyBreeds:orderWeight,
                }
            }else{
                let orderWeight= action.payload==='min' 
                    ? [...state.filtroCombinado].sort((a,b)=> a.weight.split('-')[0] - b.weight.split('-')[0])  // a y b son dogs.
                    : [...state.filtroCombinado].sort((a,b)=> b.weight.split('-')[0] - a.weight.split('-')[0]); // En este caso es descendente.
                
                return {
                    ...state,
                    filtroCombinado:orderWeight,
                }
            }
        default:
            return{
                ...state,
            }
    }
}

export default reducer;