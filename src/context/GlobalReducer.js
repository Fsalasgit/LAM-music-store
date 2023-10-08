import { ADD_TO_CART, CLEAR_CART } from "./types";

export const GlobalReducer = (state, action) => {
    switch (action?.type) {
        case ADD_TO_CART:
            return {
                ...state,
                productCart: [...state.productCart, action?.payload]
            }
        case CLEAR_CART:
            return {
                ...state,
                productCart: []
            }
    
        default:
           return state;
    }
}