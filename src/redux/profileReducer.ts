import {ActionsType} from "./reduxStore";

export type PostType = {
    id: number
    text: string
    likes: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string | undefined
}

const
    ADD_POST = 'ADD-POST',
    UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

const initialState: ProfilePageType = {
    posts: [
        {id: 1, text: "My first post", likes: 10},
        {id: 2, text: "Hello world", likes: 15},
        {id: 3, text: "Memas pro kota", likes: 100},
    ],
    newPostText: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText) {
                let newPost = {
                    id: Math.floor(Math.random() * 10),
                    text: state.newPostText,
                    likes: 0
                }
                return {...state, posts: [...state.posts, newPost]}
            }
            return state
        case UPDATE_POST_TEXT:
            return {...state, newPostText: action.text}
        default:
            return state

    }
}

export const addPostActionCreator = () => {
    return {type: ADD_POST} as const
}
export const updatePostTextActionCreator = (text: string | undefined) => {
    return {type: UPDATE_POST_TEXT, text: text} as const
}

export default profileReducer