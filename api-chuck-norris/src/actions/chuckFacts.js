import axios from 'axios';
//import {jokes} from '../reducers/chuckFacts';

// const baseURL = "https://api.chucknorris.io/jokes"

export const setAllJokes = (jokes) => {
    return {
        type: 'SET_ALL_JOKES',
        payload: {
            jokes 
        }
    }
}

export const getAllJokes = () => async (dispatch, getState) => {    
    const response = await axios.get(`https://api.chucknorris.io/jokes/random`);
    dispatch(setAllJokes(response.data.categories))
    
    console.log(response.data.categories)
}