import { ADD_TO_CART, CLEAR_CART, SET_USER } from "./types"

export const addCart = (productos) => {
    

    return {
        type: ADD_TO_CART,
        payload: productos
    }
}

export const clearCart = () => {

    return{
        type: CLEAR_CART
    }
}

export const setCurrentUser = (user) =>{

    return{
        type: SET_USER,
        payload: user
    }
}

