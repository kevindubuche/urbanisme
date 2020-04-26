import { combineReducers } from 'redux';
import postReducer from './postReducer';
import commentReducer from './commentReducer';
import authReducer from './authReducer';

export default combineReducers({
    posts: postReducer,
    comments : commentReducer,
    user: authReducer
});