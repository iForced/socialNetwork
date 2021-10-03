import React from "react";
import s from './Users.module.css'
import avatar from '../../assets/avatar.png'
import {UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

type PropsType = {
    users: Array<UserType>
    currentPage: number
    totalUsersCount: number
    usersPerPage: number
    isFollowingProgress: Array<number>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, userID: number) => void
}

const Users = (props: PropsType) => {
    //Делю на 200 потому, что слишком много страниц
    const pagesCount = Math.ceil((props.totalUsersCount / props.usersPerPage) / 200)
    const pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const usersElement = props.users.map(u =>
        <div key={u.id} className={s.user}>
            <div className={s.user_avatar}>
                <div className={s.avatar_image}>
                    <NavLink to={`/profile/${u.id}`}><img src={u.photos.small || avatar} alt="avatar"/></NavLink>
                </div>
                <button
                    className={s.follow_button}
                    disabled={props.isFollowingProgress.some(id => u.id === id)}
                    onClick={() => {
                        if (u.followed) {
                            props.toggleFollowingProgress(true, u.id)
                            usersAPI().unFollowUser(u.id)
                                .then(response => {
                                    response.data.resultCode === 0 && props.unfollow(u.id)
                                    props.toggleFollowingProgress(false, u.id)
                                })
                        } else {
                            props.toggleFollowingProgress(true, u.id)
                            usersAPI().followUser(u.id)
                                .then(response => {
                                    response.data.resultCode === 0 && props.follow(u.id)
                                    props.toggleFollowingProgress(false, u.id)
                                })
                        }
                    }}
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
    const pagesElement = pages.map(p =>
        <span
            key={p}
            className={s.page + ' ' + (props.currentPage === p && s.current_page)}
            onClick={() => props.setCurrentPage(p)}
        >{p}
        </span>)
    return (
        <div className={s.users}>
            <div className={s.pages}>
                {pagesElement}
            </div>
            {usersElement}
        </div>
    )
}

export default Users;

