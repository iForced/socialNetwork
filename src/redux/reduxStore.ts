import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import navbarReducer from "./navbarReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    navbar: navbarReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer)

export default store