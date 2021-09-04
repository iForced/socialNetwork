import React from "react";
import store from './redux/reduxStore'

export const StoreContext = React.createContext({} as typeof store)

type PropsType = {
    store: typeof store
    children: React.ReactNode
}

export const Provider = (props: PropsType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}