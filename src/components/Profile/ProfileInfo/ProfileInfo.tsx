import React from "react";
import s from './ProfileInfo.module.css'
import avatar from './../../../logo.svg'

function ProfileInfo() {
    return (
        <div className={s.profile_info}>
            <div className={s.header}>
                <img src={"https://wallpaperaccess.com/full/124578.jpg"} alt={"wallpaper"}/>
            </div>
            <div className={s.info}>
                <div className={s.info_avatar}>
                    <img src={avatar} alt={"avatar"}/>
                </div>
                <div className={s.info_text}>
                    <p>Date of birth: 28.07.1992</p>
                    <p>City: Minsk</p>
                    <p>Education: MSHAC'2015</p>
                    <p>Website: vk.com</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;