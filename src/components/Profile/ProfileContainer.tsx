import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {setUserProfile, UserProfileType} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";

type mapStateToPropsType = {
    userProfile: UserProfileType | null
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: UserProfileType) => void
}
export type UserProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<UserProfilePropsType> {

    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0//profile/2')
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
})(ProfileContainer)
