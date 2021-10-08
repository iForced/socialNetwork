import React from "react";
import Profile from "./Profile";
import {getProfileThunk, UserProfileType} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";

type mapStateToPropsType = {
    userProfile: UserProfileType | null
}
type mapDispatchToPropsType = {
    getProfileThunk: (id: string) => void
}
type PathParamsType = {
    userID: string
}
export type UserProfilePropsType = mapStateToPropsType & mapDispatchToPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<UserProfilePropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) userID = '2'
        this.props.getProfileThunk(userID)
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
    getProfileThunk,
})(withRouter(ProfileContainer))
