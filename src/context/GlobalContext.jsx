import { createContext } from "react";

export const initialState = {
    productCart: []
}

export const GlobalContext = createContext({
    state: initialState,
    dispatch: (action) => {}
})

