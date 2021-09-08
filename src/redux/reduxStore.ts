import {combineReducers, createStore} from "redux";
import profileReducer, {addPostActionCreator, updatePostTextActionCreator} from "./profileReducer";
import messagesReducer, {addMessageActionCreator, updateMessageTextActionCreator} from "./messagesReducer";
import navbarReducer from "./navbarReducer";
import {followAC, setUsersAC, unfollowAC, usersReducer} from "./usersReducer";

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdatePostTextActionType = ReturnType<typeof updatePostTextActionCreator>
export type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
export type UpdateMessageTextActionType = ReturnType<typeof updateMessageTextActionCreator>
export type followUserActionType = ReturnType<typeof followAC>
export type unfollowUserActionType = ReturnType<typeof unfollowAC>
export type setUsersActionType = ReturnType<typeof setUsersAC>
export type ActionsType =
    AddPostActionType |
    UpdatePostTextActionType |
    AddMessageActionType |
    UpdateMessageTextActionType |
    followUserActionType |
    unfollowUserActionType |
    setUsersActionType

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer)

export default store