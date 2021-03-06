import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profileReducer";

type PropsType = {
    userProfile: UserProfileType | null
    profileStatus: string
    updateProfileStatus: (status: string) => void
}

function Profile(props: PropsType) {
    return (
        <div className={s.profile}>
            <ProfileInfo
                userProfile={props.userProfile}
                profileStatus={props.profileStatus}
                updateProfileStatus={props.updateProfileStatus}
            />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;