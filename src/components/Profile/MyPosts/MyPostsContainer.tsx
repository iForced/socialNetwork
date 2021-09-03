import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";
import {ActionsType, PostType} from "../../../redux/store";
import MyPosts from "./MyPosts";

type PropsType = {
    posts: Array<PostType>
    newPostText: string | undefined
    dispatch: (action: ActionsType) => void
}

function MyPostsContainer(props: PropsType) {
    const addPost = () => {
        props.dispatch(addPostActionCreator())
        props.dispatch(updatePostTextActionCreator(''))
    }

    const updatePostText = (text: string | undefined) => {
        props.dispatch(updatePostTextActionCreator(text))
    }

    return (
        <MyPosts
            addPost={addPost}
            updatePostText={updatePostText}
            newPostText={props.newPostText}
            posts={props.posts}
        />
    )
}

export default MyPostsContainer;