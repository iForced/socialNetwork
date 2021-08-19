import React from "react";
import s from './FriendsList.module.css'
import {FriendType} from "../../../redux/store";

function Friend(props: FriendType) {
    return (
        <div className={s.friend}>
            <div className={s.friend_avatar}>
                <img src={props.avatar + props.id} alt={"avatar"}/>
            </div>
            <div className={s.friend_name}>
                {props.name}
            </div>
        </div>
    )
}

export default Friend;