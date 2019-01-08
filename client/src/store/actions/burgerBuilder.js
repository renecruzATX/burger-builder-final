import * as actionTypes from './actionTypes';
import axios from 'axios';

//all the redux actions available to the burger builder container

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };    
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED,
    };
};

export const initIngredients = () => {
    return dispatch => {
        axios.get('/ingredients')
            .then(response => {                
                dispatch(setIngredients(response.data.shift()));
            })
            .catch(error => {
                dispatch(fetchIngredientsFailed());
            });
    };
};