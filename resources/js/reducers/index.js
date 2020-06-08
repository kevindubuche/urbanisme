import { combineReducers } from 'redux';
import postReducer from './postReducer';
import commentReducer from './commentReducer';
import authReducer from './authReducer';
import annonceReducer from './annonceReducer';
import konbitReducer from './konbitReducer';
import langueReducer from './langueReducer';
import lexiqueReducer from './lexiqueReducer';
import searchReducer from './searchReducer';
import mailReducer from './mailReducer';

export default combineReducers({
    posts: postReducer,
    comments : commentReducer,
    user: authReducer,
    annonces: annonceReducer,
    konbits: konbitReducer,
    langue: langueReducer,
    lexique: lexiqueReducer,
    resultatsSearch: searchReducer,
    mail: mailReducer,
});