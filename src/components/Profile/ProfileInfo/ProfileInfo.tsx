import React from "react";
import s from './ProfileInfo.module.css'
import avatar from './../../../logo.svg'
import {UserProfileType} from "../../../redux/profileReducer";

type PropsType = {
    userProfile: UserProfileType | null
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
                <div className={s.info_text}>
                    <p>Привет, меня зовут <b>{props.userProfile?.fullName}</b></p>
                    <p>Я {props.userProfile?.lookingForAJob ? 'в поиске работы' : 'в данный момент не интересуюсь поиском работы'}</p>
                    {props.userProfile?.lookingForAJob && <p>А точнее {props.userProfile?.lookingForAJobDescription}</p>}
                    <p>Со мной можно связаться здесь:</p>
                    <p><a href={'https://' + props.userProfile?.contacts.vk}>ВК</a></p>
                    <p><a href={'https://' + props.userProfile?.contacts.facebook}>FB</a></p>
                    <p><a href={'https://' + props.userProfile?.contacts.instagram}>Inst</a></p>
                    <p>Мой github: <a href={'https://' + props.userProfile?.contacts.github}>Github</a></p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;