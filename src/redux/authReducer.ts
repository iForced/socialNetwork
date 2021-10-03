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

export const setAuthUserData = (id: number, email: string, login: string) => {
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