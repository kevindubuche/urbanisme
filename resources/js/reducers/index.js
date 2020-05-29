import { combineReducers } from 'redux';
import postReducer from './postReducer';
import commentReducer from './commentReducer';
import authReducer from './authReducer';
import annonceReducer from './annonceReducer';
import langueReducer from './langueReducer';
import lexiqueReducer from './lexiqueReducer';
import searchReducer from './searchReducer';

export default combineReducers({
    posts: postReducer,
    comments : commentReducer,
    user: authReducer,
    annonces: annonceReducer,
    langue: langueReducer,
    lexique: lexiqueReducer,
    resultatsSearch: searchReducer,
});