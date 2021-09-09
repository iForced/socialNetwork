import React from "react";
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import avatar from '../../assets/avatar.png'

function Users(props: UsersPropsType) {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => props.setUsers(response.data.items))
    }

    const usersElement = props.users.map(u =>
        <div key={u.id} className={s.user}>
            <div className={s.user_avatar}>
                <div className={s.avatar_image}>
                    <img src={u.photos.small || avatar} alt="avatar"/>
                </div>
                <button
                    className={s.follow_button}
                    onClick={() => u.followed ? props.unfollow : props.follow}
                >{u.followed ? 'Unfollow' : 'Follow'}</button>
            </div>
            <div className={s.user_info}>
                <div className={s.user_name}>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </div>
                <div className={s.user_location}>
                    {'location'}
                </div>
            </div>
        </div>)
    return (
        <div className={s.users_container}>
            {usersElement}
        </div>
    )
}

export default Users
