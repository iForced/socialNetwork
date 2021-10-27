import React from "react";
import {addPostActionCreator, PostType} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    posts: Array<PostType>
}
type MapDispatchToPropsType = {
    addPost: (postText: string) => void
}
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (postText) => {
            dispatch(addPostActionCreator(postText))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;