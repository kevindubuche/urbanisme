
import { FETCH_ANNONCES, NEW_ANNONCE, EDIT_ANNONCE, CLEAR_NEW_ANNONCE, DELETE_ANNONCE } from '../actions/types';

const initialState = {
    items: [],
    item: {},
    selectedItem :{}
};

export default function(state =initialState, action){
    switch(action.type){
        case FETCH_ANNONCES :
            return {
                ...state,
                items: action.payload.data
            }
         case NEW_ANNONCE :
            return {
                ...state,
                item: action.payload
            };
        case DELETE_ANNONCE :
            console.log(action.payload)
            return{
                ...state,
                items : state.items.filter(article => article.id !== action.payload)
            }
        case EDIT_ANNONCE :
            console.log(action.payload)
            return{
                ...state,
                items :  state.items.map(function(item) { return item.id == action.payload.id ? action.payload : item; })
            }
            case CLEAR_NEW_ANNONCE :
                return {
                    ...state,
                    item: action.payload
                };
         
           
        default:
            return state;
    }
}