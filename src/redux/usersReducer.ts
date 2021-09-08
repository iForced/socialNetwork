import {ActionsType} from "./reduxStore";

const
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET-USERS'

export type UserType = {
    id: number
    name: string
    status: string
    followed: boolean
    location: {city: string, country: string}
}
type UsersPageType = {
    users: Array<UserType>
}

const initialState: UsersPageType = {
    users: [
        // {id: 1, name: 'Valera', status: 'I am a boss', followed: false, location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 2, name: 'Sanya', status: 'I am a programmer', followed: true, location: {city: 'Moscow', country: 'Russia'}},
        // {id: 3, name: 'Kazbek', status: 'I am from zavod', followed: true, location: {city: 'Kyiv', country: 'Ukraine'}},
    ]
}

export const followAC = (userID: number) => {
    return {type: FOLLOW, userID: userID} as const
}
export const unfollowAC = (userID: number) => {
    return {type: UNFOLLOW, userID: userID} as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {type: SET_USERS, users: users} as const
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}