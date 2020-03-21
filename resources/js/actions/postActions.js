import { FETCH_POSTS, NEW_POST, API_POST } from './types';
import axios from 'axios';

//cette fonction recupere touts les articles du database et update l'etat du store
export const fetchPosts = () => dispatch => { 
        axios.get(API_POST)
         .then(posts => dispatch({
             type : FETCH_POSTS,
             payload : posts.data
         }))
         .catch(error => {
            console.log(error);
        });     

        }
//cette fonction ajoute un nouveau article au database et update l'etat du store
export const createPost = postData => dispatch => { 
    axios.post(API_POST, postData).then(response =>{
        dispatch({
            type : NEW_POST,
            payload : response.data
        })
        })
        .catch(error => {
            console.log(error);
        })
}