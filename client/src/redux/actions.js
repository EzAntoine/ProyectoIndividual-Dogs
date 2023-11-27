/* Dependencies */
import {GET_ALL_BREEDS,GET_DETAIL,GET_BY_NAME,POST_BREED,FILTER,ORDER} from './action-types';
import axios from 'axios';

export const getDetail=(id)=>{
    return async (dispatch)=>{
        const {data}= axios.get(`http://localhost:3001/dogs/${id}`);
        return dispatch({
            type:GET_DETAIL,
            payload:data,
        });
    }
}