import {ActionsType} from "./reduxStore";

const
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET-USERS',
    SET_PAGE = 'SET-PAGE',
    SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

export type UserType = {
    id: number
    name: string
    status: string
    photos: {small: string, large: string}
    followed: boolean
}
type UsersPageType = {
    users: Array<UserType>
    currentPage: number
    totalUsersCount: number
    usersPerPage: number
    isFetching: boolean
}

const initialState: UsersPageType = {
    users: [],
    currentPage: 1,
    totalUsersCount: 0,
    usersPerPage: 5,
    isFetching: false,
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
export const setPageAC = (pageNumber: number) => {
    return {type: SET_PAGE, pageNumber: pageNumber} as const
}
export const setTotalUsersCountAC = (count: number) => {
    return {type: SET_TOTAL_USERS_COUNT, totalUsersCount: count} as const
}
export const toggleIsFetchingAC = (newIsFetching: boolean) => {
    return {type: TOGGLE_IS_FETCHING, isFetching: newIsFetching} as const
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: action.users}
        case SET_PAGE:
            return {...state, currentPage: action.pageNumber}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}