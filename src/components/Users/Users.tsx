import React from "react";
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import avatar from '../../assets/avatar.png'

class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersPerPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    setPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPerPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        //Делю на 200 потому, что слишком много страниц
        const pagesCount = Math.ceil((this.props.totalUsersCount / this.props.usersPerPage) / 200)
        const pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        const usersElement = this.props.users.map(u =>
            <div key={u.id} className={s.user}>
                <div className={s.user_avatar}>
                    <div className={s.avatar_image}>
                        <img src={u.photos.small || avatar} alt="avatar"/>
                    </div>
                    <button
                        className={s.follow_button}
                        onClick={() => u.followed ? this.props.unfollow(u.id) : this.props.follow(u.id)}
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
            <div className={s.users}>
                <div className={s.pages}>
                    {
                        pages.map(p =>
                            <span
                                key={p}
                                className={s.page + ' ' + (this.props.currentPage === p && s.current_page)}
                                onClick={() => this.setPage(p)}
                            >{p}
                            </span>)
                    }
                </div>
                {usersElement}
            </div>
        )
    }
}

export default Users
