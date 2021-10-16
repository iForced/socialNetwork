import React from "react";
import s from './ProfileInfo.module.css'
import avatar from './../../../logo.svg'
import {UserProfileType} from "../../../redux/profileReducer";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

type PropsType = {
    userProfile: UserProfileType | null
    profileStatus: string
}

function ProfileInfo(props: PropsType) {
    return (
        <div className={s.profile_info}>
            <div className={s.header}>
                <img src={"https://wallpaperaccess.com/full/124578.jpg"} alt={"wallpaper"}/>
            </div>
            <div className={s.info}>
                <div className={s.info_avatar}>
                    <img src={props.userProfile?.photos.small || avatar} alt={"avatar"}/>
                </div>
                {/*TODO need to fix types*/}
                <ProfileStatus profileStatus={props.profileStatus} />
                <div className={s.info_text}>
                    <p>Привет, меня зовут <b>{props.userProfile?.fullName}</b></p>
                    <p>Я {props.userProfile?.lookingForAJob ? 'в поиске работы' : 'в данный момент не интересуюсь поиском работы'}</p>
                    {props.userProfile?.lookingForAJob && <p>А точнее {props.userProfile?.lookingForAJobDescription}</p>}
                    <p>Со мной можно связаться здесь:</p>
                    {props.userProfile?.contacts.vk && (<p><a href={'https://' + props.userProfile?.contacts.vk}>ВК</a></p>)}
                    {props.userProfile?.contacts.facebook && (<p><a href={'https://' + props.userProfile?.contacts.facebook}>FB</a></p>)}
                    {props.userProfile?.contacts.instagram && (<p><a href={'https://' + props.userProfile?.contacts.instagram}>Inst</a></p>)}
                    {props.userProfile?.contacts.github && (<p>Мой github: <a href={'https://' + props.userProfile?.contacts.github}>Github</a></p>)}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;