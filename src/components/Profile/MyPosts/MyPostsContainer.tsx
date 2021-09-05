import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";
import {PostType} from "../../../redux/store";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string | undefined
}
type MapDispatchToPropsType = {
    updatePostText: (text: string | undefined) => void
    addPost: () => void
}
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updatePostText: (text: string | undefined) => {
            dispatch(updatePostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
            dispatch(updatePostTextActionCreator(''))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;