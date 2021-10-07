import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {
    follow, followUserThunk, getUsersThunk,
    setPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unfollow, unFollowUserThunk,
    UserType
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader";

type MapStateToPropsType = {
    users: Array<UserType>
    currentPage: number
    totalUsersCount: number
    usersPerPage: number
    isFetching: boolean
    isFollowingProgress: Array<number>
}
type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setPage: (pageNumber: number) => void
    setTotalUsersCount: (count: number) => void
    toggleIsFetching: (newIsFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userID: number) => void
    getUsersThunk: (currentPage: number, usersPerPage: number) => void
    unFollowUserThunk: (id: number) => void
    followUserThunk: (id: number) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainerClass extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.usersPerPage)
    }

    setCurrentPage = (pageNumber: number) => {
        this.props.setPage(pageNumber)
        this.props.getUsersThunk(pageNumber, this.props.usersPerPage)
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
                            follow={this.props.followUserThunk}
                            unfollow={this.props.unFollowUserThunk}
                            setCurrentPage={this.setCurrentPage}
                            isFollowingProgress={this.props.isFollowingProgress}
                            toggleFollowingProgress={this.props.toggleFollowingProgress}
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
        isFetching: state.usersPage.isFetching,
        isFollowingProgress: state.usersPage.isFollowingProgress
    }
}

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsersThunk,
    unFollowUserThunk,
    followUserThunk,
})(UsersContainerClass)

export default UsersContainer