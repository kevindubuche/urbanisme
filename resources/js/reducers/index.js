import { combineReducers } from 'redux';
import postReducer from './postReducer';
import commentReducer from './commentReducer';
import authReducer from './authReducer';
import annonceReducer from './annonceReducer';

export default combineReducers({
    posts: postReducer,
    comments : commentReducer,
    user: authReducer,
    annonces: annonceReducer,
});