import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

type InitialStateType = {
    id: null | number
    email: null | string
    login: null | string
    isLogged: boolean
}
type SetUserDataActionType = ReturnType<typeof setAuthUserData>
type ToggleLoggedActionType = ReturnType<typeof toggleLogged>
type ActionsType = SetUserDataActionType | ToggleLoggedActionType

const
    SET_USER_DATA = 'SET-USER-DATA',
    TOGGLE_LOGGED = 'TOGGLE-LOGGED'

const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isLogged: false,
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data}
        case TOGGLE_LOGGED:
            return {...state, isLogged: action.isLogged}
        default:
            return state
    }
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null) => {
    return {
        type: SET_USER_DATA,
        data: {id, email, login}
    } as const
}
export const toggleLogged = (isLogged: boolean) => {
    return {
        type: TOGGLE_LOGGED,
        isLogged,
    } as const
}
export const authThunk = () => (dispatch: Dispatch) => {
    return authAPI().me()
        .then(response => response.data)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login))
                dispatch(toggleLogged(true))
            }
        })
}
//TODO need to fix any in this dispatch
export const loginThunk = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authAPI().login(email, password, rememberMe)
        .then(response => response.data)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(authThunk())
            } else {
                dispatch(stopSubmit('login', {_error: data.messages.join(',')}))
            }
        })
}
export const logoutThunk = () => (dispatch: any) => {
    authAPI().logout()
        .then(response => response.data)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null))
                dispatch(toggleLogged(false))
            }
        })
}