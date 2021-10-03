import React from "react";
import Header from "./Header";
import axios from "axios";
import {AppStateType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {setAuthUserData, toggleLogged} from "../../redux/authReducer";

type MapStateToPropsType = {
    id: null | number
    email: null | string
    login: null | string
    isLogged: boolean
}
type MapDispatchToPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void
    toggleLogged: (isLogged: boolean) => void
}
export type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => response.data)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.setAuthUserData(data.data.id, data.data.email, data.data.login)
                    this.props.toggleLogged(true)
                }
            })
    }

    render() {
        return (
            <Header
                id={this.props.id}
                login={this.props.login}
                email={this.props.email}
                isLogged={this.props.isLogged}
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
    setAuthUserData,
    toggleLogged,
})(HeaderContainer)