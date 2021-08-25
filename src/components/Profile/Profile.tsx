import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {ActionType, PostType} from "../../redux/store";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type PropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: { type: ActionType, text?: string }) => void
}

function Profile(props: PropsType) {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                newPostText={props.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;