import React from "react";
import Profile from "./Profile";
import {getProfileThunk, UserProfileType} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type mapStateToPropsType = {
    userProfile: UserProfileType | null
    isLogged: boolean
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
            this.props.isLogged
                ? <Profile userProfile={this.props.userProfile}/>
                : <Redirect to={"/login"}/>
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        userProfile: state.profilePage.userProfile,
        isLogged: state.auth.isLogged,
    }
}

export default connect(mapStateToProps, {
    getProfileThunk,
})(withRouter(ProfileContainer))
