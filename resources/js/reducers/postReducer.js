
import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialSate = {
    items: [],
    item: {}
};

export default function(state =initialSate, action){
    switch(action.type){
        case FETCH_POSTS :
            return {
                ...state,
                items: action.payload
            }
         case NEW_POST :
             console.log('okok '+action.payload)
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}