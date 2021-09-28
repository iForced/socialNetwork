import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {setUserProfile, UserProfileType} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";

type mapStateToPropsType = {
    userProfile: UserProfileType | null
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: UserProfileType) => void
}
type PathParamsType = {
    userID: string
}
export type UserProfilePropsType = mapStateToPropsType & mapDispatchToPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<UserProfilePropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) userID = '2'
        axios
            .get('https://social-network.samuraijs.com/api/1.0//profile/' + userID)
            .then(response => response.data)
            .then(data => this.props.setUserProfile(data))
    }

    render() {
        return (
            <Profile userProfile={this.props.userProfile} />
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        userProfile: state.profilePage.userProfile
    }
}

export default connect(mapStateToProps, {
    setUserProfile,
})(withRouter(ProfileContainer))
