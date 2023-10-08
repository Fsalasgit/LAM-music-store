import { ADD_TO_CART, CLEAR_CART } from "./types"

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

