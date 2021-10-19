import React from "react";
import Profile from "./Profile";
import {
    getProfileStatusThunk,
    getProfileThunk,
    updateProfileStatusThunk,
    UserProfileType
} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type mapStateToPropsType = {
    userProfile: UserProfileType | null
    profileStatus: string
}
type mapDispatchToPropsType = {
    getProfileThunk: (id: number) => void
    getProfileStatusThunk: (id: number) => void
    updateProfileStatusThunk: (status: string) => void
}
type PathParamsType = {
    userID: string
}
export type UserProfilePropsType = mapStateToPropsType & mapDispatchToPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<UserProfilePropsType> {

    componentDidMount() {
        let userID = +this.props.match.params.userID
        if (!userID) userID = 19534
        this.props.getProfileThunk(userID)
        this.props.getProfileStatusThunk(userID)
    }

    render() {
        return (
            <Profile
                userProfile={this.props.userProfile}
                profileStatus={this.props.profileStatus}
                updateProfileStatus={this.props.updateProfileStatusThunk}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        userProfile: state.profilePage.userProfile,
        profileStatus: state.profilePage.profileStatus
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileThunk, getProfileStatusThunk, updateProfileStatusThunk}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)

