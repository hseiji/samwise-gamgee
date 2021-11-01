import { createContext, useReducer } from "react";

//Creates a CONTEXT for darkMode
export const ThemeContext = createContext();

const INITIAL_STATE = { darkMode: false };

//Creates the themeReducer and the ACTIONS
const themeReducer = (state, action) => {
    switch(action.type) {
        case "TOGGLE":
            return { darkMode: !state.darkMode};
        default:
            return false;
    }
}

//Creates the Provider and the REDUCER for the Context
export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

    return (
        <ThemeContext.Provider value={{state, dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
