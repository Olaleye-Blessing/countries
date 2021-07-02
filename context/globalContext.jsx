import { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducer/reducer";

const GlobalContent = createContext();

let initialState = {
    countries: [],
};

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <GlobalContent.Provider
            value={{
                ...state,
                dispatch,
            }}
        >
            {children}
        </GlobalContent.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContent);
