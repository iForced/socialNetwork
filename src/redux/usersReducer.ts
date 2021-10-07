import {ActionsType} from "./reduxStore";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

const
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET-USERS',
    SET_PAGE = 'SET-PAGE',
    SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING',
    TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE-FOLLOWING-PROGRESS'

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
    isFollowingProgress: Array<number>
}

const initialState: UsersPageType = {
    users: [],
    currentPage: 1,
    totalUsersCount: 0,
    usersPerPage: 5,
    isFetching: false,
    isFollowingProgress: [],
}

export const follow = (userID: number) => {
    return {type: FOLLOW, userID: userID} as const
}
export const unfollow = (userID: number) => {
    return {type: UNFOLLOW, userID: userID} as const
}
export const setUsers = (users: Array<UserType>) => {
    return {type: SET_USERS, users: users} as const
}
export const setPage = (pageNumber: number) => {
    return {type: SET_PAGE, pageNumber: pageNumber} as const
}
export const setTotalUsersCount = (count: number) => {
    return {type: SET_TOTAL_USERS_COUNT, totalUsersCount: count} as const
}
export const toggleIsFetching = (newIsFetching: boolean) => {
    return {type: TOGGLE_IS_FETCHING, isFetching: newIsFetching} as const
}
export const toggleFollowingProgress = (isFetching: boolean, userID: number) => {
    return {type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userID} as const
}
export const getUsersThunk = (currentPage: number, usersPerPage: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    usersAPI().getUsers(currentPage, usersPerPage)
        .then(response => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(response.items))
            dispatch(setTotalUsersCount(response.totalCount))
        })
}
export const unFollowUserThunk = (id: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, id))
    usersAPI().unFollowUser(id)
        .then(response => {
            response.data.resultCode === 0 && dispatch(unfollow(id))
            dispatch(toggleFollowingProgress(false, id))
        })
}
export const followUserThunk = (id: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, id))
    usersAPI().followUser(id)
        .then(response => {
            response.data.resultCode === 0 && dispatch(follow(id))
            dispatch(toggleFollowingProgress(false, id))
        })
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
        case TOGGLE_FOLLOWING_PROGRESS:
            return {...state, isFollowingProgress: action.isFetching
                    ? [...state.isFollowingProgress, action.userID]
                    : state.isFollowingProgress.filter(el => el !== action.userID)
            }
        default:
            return state
    }
}