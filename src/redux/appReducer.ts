import {authThunk} from "./authReducer";

type InitialStateType = {
    isInitialized: boolean
}
type SetInitializedActionType = ReturnType<typeof setInitialized>
type ActionsType = SetInitializedActionType

const
    SET_INITIALIZED = 'SET-INITIALIZED'

const initialState: InitialStateType = {
    isInitialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {...state, isInitialized: action.isInitialized}
        default:
            return state
    }
}

export const setInitialized = (isInitialized: boolean) => {
    return {
        type: SET_INITIALIZED,
        isInitialized: isInitialized
    } as const
}
export const initializeApp = () => (dispatch: any) => {
    const authPromise = dispatch(authThunk())
    authPromise
        .then(() => dispatch(setInitialized(true)))
}