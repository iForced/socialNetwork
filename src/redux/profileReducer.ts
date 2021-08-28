import {ActionsType, ProfilePageType} from "./store";

const
    ADD_POST = 'ADD-POST',
    UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

const profileReducer = (state: ProfilePageType, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText) {
                let newPost = {
                    id: state.posts[state.posts.length - 1].id + 1,
                    text: state.newPostText,
                    likes: 0
                }
                state.posts.push(newPost)
            }
            return state
        case UPDATE_POST_TEXT:
            state.newPostText = action.text
            return state
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