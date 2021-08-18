import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {ProfilePageType} from "../../redux/state";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props: ProfilePageType) {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}  addPost={props.addPost}
                     newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

export default Profile;