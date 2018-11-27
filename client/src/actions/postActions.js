import axios from 'axios'; 

import {
    ADD_POST, 
    GET_ERRORS,
    GET_POSTS, 
    POST_LOADING,
    DELETE_POST 
} from './types';

//ADD POST 
export const addPost = postData => dispatch => {
    axios 
        .post('/api/posts', postData)
        .then(res =>
            dispatch ({
                type: ADD_POST, 
                payload: res.data
            })
        )
        .catch(err => 
            dispatch ({
                type: GET_ERRORS, 
                payload: err.response.data
            })
        );
};

//GET POSTS 
export const getPosts = () => dispatch => {
    dispatch(setPostLoading());
    axios 
        .get('/api/posts')
        .then(res =>
            dispatch ({
                type: GET_POSTS, 
                payload: res.data
            })
        )
        .catch(err => 
            dispatch ({
                type: GET_POSTS, 
                payload: null
            })
        );
};

// DELETE POST
export const deletePost = id => dispatch => {
    axios 
        .delete(`/api/posts/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_POST, 
                payload: id
            })
        )
        .catch(err => 
            dispatch ({
                type: GET_ERRORS, 
                payload: err.response.data
            })
        );
};

//+ 1 LIKE POST
export const like = id => dispatch => {
    axios 
        .delete(`/api/posts/like/${id}`)
        .then(res => dispatch(getPosts()))
        .catch(err => 
            dispatch ({
                type: GET_ERRORS, 
                payload: err.response.data
            })
        );
};

// SET LOADING STATE 

export const setPostLoading = () => {
    return{
        type: POST_LOADING
    }
}