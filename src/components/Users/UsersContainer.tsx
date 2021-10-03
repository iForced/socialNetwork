import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {
    follow,
    setPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow,
    UserType
} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader";

type MapStateToPropsType = {
    users: Array<UserType>
    currentPage: number
    totalUsersCount: number
    usersPerPage: number
    isFetching: boolean
}
type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setPage: (pageNumber: number) => void
    setTotalUsersCount: (count: number) => void
    toggleIsFetching: (newIsFetching: boolean) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersAPI extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersPerPage}`, {
                withCredentials: true,
            })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    setCurrentPage = (pageNumber: number) => {
        this.props.setPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPerPage}`, {
                withCredentials: true,
            })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <>
                {
                    this.props.isFetching
                        ? <Preloader/>
                        : <Users
                            users={this.props.users}
                            currentPage={this.props.currentPage}
                            totalUsersCount={this.props.totalUsersCount}
                            usersPerPage={this.props.usersPerPage}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                            setCurrentPage={this.setCurrentPage}
                        />
                }

            </>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        usersPerPage: state.usersPage.usersPerPage,
        isFetching: state.usersPage.isFetching
    }
}

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersAPI)

export default UsersContainer