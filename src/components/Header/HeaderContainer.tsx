import React from "react";
import Header from "./Header";
import {AppStateType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {authThunk, logoutThunk} from "../../redux/authReducer";

type MapStateToPropsType = {
    id: null | number
    email: null | string
    login: null | string
    isLogged: boolean
}
type MapDispatchToPropsType = {
    authThunk: () => void
    logoutThunk: () => void
}
export type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        this.props.authThunk()
    }

    render() {
        return (
            <Header
                id={this.props.id}
                login={this.props.login}
                email={this.props.email}
                isLogged={this.props.isLogged}
                logout={this.props.logoutThunk}
            />
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isLogged: state.auth.isLogged,
    }
}

export default connect(mapStateToProps, {
    authThunk,
    logoutThunk,
})(HeaderContainer)