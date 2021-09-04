import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";
import {ActionsType, PostType} from "../../../redux/store";
import {StoreContext} from "../../../StoreContext";
import MyPosts from "./MyPosts";

type PropsType = {
    posts: Array<PostType>
    newPostText: string | undefined
    dispatch: (action: ActionsType) => void
}

function MyPostsContainer() {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().profilePage
                    const addPost = () => {
                        store.dispatch(addPostActionCreator())
                        store.dispatch(updatePostTextActionCreator(''))
                    }

                    const updatePostText = (text: string | undefined) => {
                        store.dispatch(updatePostTextActionCreator(text))
                    }
                    return <MyPosts
                        addPost={addPost}
                        updatePostText={updatePostText}
                        newPostText={state.newPostText}
                        posts={state.posts}
                    />
                }
            }
        </StoreContext.Consumer>

    )
}

export default MyPostsContainer;