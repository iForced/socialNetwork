import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {
    follow,
    setPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unfollow,
    UserType
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {usersAPI} from "../../api/api";

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
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersAPI extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI().getUsers(this.props.currentPage, this.props.usersPerPage)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.items)
                this.props.setTotalUsersCount(response.totalCount)
            })
    }

    setCurrentPage = (pageNumber: number) => {
        this.props.setPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersAPI().getUsers(pageNumber, this.props.usersPerPage)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.items)
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
})(UsersAPI)

export default UsersContainer