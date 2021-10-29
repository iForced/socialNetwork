import {ActionsType} from "./reduxStore";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

export type PostType = {
    id: number
    text: string
    likes: number
}
export type UserProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string | null
        large: string | null
    }
}
export type ProfilePageType = {
    posts: Array<PostType>
    userProfile: UserProfileType | null
    profileStatus: string
}

const
    ADD_POST = 'ADD-POST',
    SET_USER_PROFILE = 'SET-USER-PROFILE',
    SET_PROFILE_STATUS = 'SET-PROFILE-STATUS'

const initialState: ProfilePageType = {
    posts: [
        {id: 1, text: "My first post", likes: 10},
        {id: 2, text: "Hello world", likes: 15},
        {id: 3, text: "Memas pro kota", likes: 100},
    ],
    userProfile: null,
    profileStatus: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: Math.floor(Math.random() * 10),
                text: action.postText,
                likes: 0
            }
            return {...state, posts: [...state.posts, newPost]}
        case SET_USER_PROFILE:
            return {...state, userProfile: action.profile}
        case SET_PROFILE_STATUS:
            return {...state, profileStatus: action.status}
        default:
            return state

    }
}

export const addPostActionCreator = (postText: string) => {
    return {type: ADD_POST, postText} as const
}
export const setUserProfile = (profile: UserProfileType) => {
    return {type: SET_USER_PROFILE, profile: profile} as const
}
export const setProfileStatus = (status: string) => {
    return {type: SET_PROFILE_STATUS, status: status} as const
}
export const getProfileThunk = (id: number) => (dispatch: Dispatch) => {
    profileAPI().getProfile(id)
        .then(response => response.data)
        .then(data => dispatch(setUserProfile(data)))
}
export const getProfileStatusThunk = (id: number) => (dispatch: Dispatch) => {
    profileAPI().getStatus(id)
        .then(response => response.data)
        .then(data => dispatch(setProfileStatus(data)))
}
export const updateProfileStatusThunk = (status: string) => (dispatch: Dispatch) => {
    profileAPI().updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setProfileStatus(status))
            }
        })
}

export default profileReducer