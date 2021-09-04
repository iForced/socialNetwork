import React from "react";
import s from './Profile.module.css'
import {ActionsType, PostType} from "../../redux/store";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type PropsType = {
    posts: Array<PostType>
    newPostText: string | undefined
    dispatch: (action: ActionsType) => void
}

function Profile() {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;