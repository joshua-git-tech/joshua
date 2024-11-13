import React, { useContext, useReducer } from "react";
import reducer from "./Reducer"

const AppContext = React.createContext();

const initialState = {
  isdarkMode: Boolean(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches),
}

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const toggleTheme= () =>{
    return dispatch({type: "TOGGLE_THEME"})
}

  return <AppContext.Provider value={{...state, toggleTheme}}>{children}</AppContext.Provider>;
};

//custom hook

const useGlobalContext = () =>{
  return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext}
