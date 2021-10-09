import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {
    addPostActionCreator,
    setProfileStatus,
    setUserProfile,
    updatePostTextActionCreator
} from "./profileReducer";
import messagesReducer, {addMessageActionCreator, updateMessageTextActionCreator} from "./messagesReducer";
import navbarReducer from "./navbarReducer";
import {
    follow,
    setPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unfollow,
    usersReducer
} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk";

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdatePostTextActionType = ReturnType<typeof updatePostTextActionCreator>
export type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
export type UpdateMessageTextActionType = ReturnType<typeof updateMessageTextActionCreator>
export type followUserActionType = ReturnType<typeof follow>
export type unfollowUserActionType = ReturnType<typeof unfollow>
export type setUsersActionType = ReturnType<typeof setUsers>
export type setPagesActionType = ReturnType<typeof setPage>
export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
export type setUserProfileActionType = ReturnType<typeof setUserProfile>
export type toggleFollowingProgressActionType = ReturnType<typeof toggleFollowingProgress>
export type setProfileStatusActionType = ReturnType<typeof setProfileStatus>
export type ActionsType =
    AddPostActionType |
    UpdatePostTextActionType |
    AddMessageActionType |
    UpdateMessageTextActionType |
    followUserActionType |
    unfollowUserActionType |
    setUsersActionType |
    setPagesActionType |
    setTotalUsersCountActionType |
    toggleIsFetchingActionType |
    setUserProfileActionType |
    toggleFollowingProgressActionType |
    setProfileStatusActionType

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store

export default store