import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {PostType} from "../../redux/store";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type PropsType = {
    posts: Array<PostType>
    addPost: () => void
    newPostText: string
    updatePostText: (text: string) => void
}

function Profile(props: PropsType) {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     addPost={props.addPost}
                     newPostText={props.newPostText}
                     updatePostText={props.updatePostText}
            />
        </div>
    )
}

export default Profile;