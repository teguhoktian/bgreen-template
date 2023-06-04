import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    loading: false,
    sidebarToggle: false
}

export const ApplicationContext = createContext(INITIAL_STATE)

const ApplicationReducer = (state, action) => {

    switch (action.type) {
        default:
            return state;
    }

}

export const ApplicationContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ApplicationReducer, INITIAL_STATE)

    return(
        <ApplicationContext.Provider value={{
            loading: state.loading, sidebarToggle: state.sidebarToggle, dispatch
        }}>
            {children}
        </ApplicationContext.Provider>
    )
}