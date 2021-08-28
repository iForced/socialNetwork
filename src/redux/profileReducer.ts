import {ActionsType, ProfilePageType} from "./store";

const
    ADD_POST = 'ADD-POST',
    UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

const profileReducer = (state: ProfilePageType, action: ActionsType) => {
    if (action.type === ADD_POST) {
        if (state.newPostText) {
            let newPost = {
                id: state.posts[state.posts.length - 1].id + 1,
                text: state.newPostText,
                likes: 0
            }
            state.posts.push(newPost)
        }
    } else if (action.type === UPDATE_POST_TEXT) {
        state.newPostText = action.text
    }

    return state
}

export default profileReducer