import React, {ComponentType} from "react";
import {AppStateType} from "../redux/reduxStore";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

type RedirectContainerPropsType = {
    isLogged: boolean
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    class RedirectContainer extends React.Component<RedirectContainerPropsType> {
        render() {
            const {isLogged, ...restProps} = this.props
            return (
                isLogged
                    ? <Component {...restProps as T} />
                    : <Redirect to={"/login"}/>
            )
        }
    }

    return connect(mapStateToProps)(RedirectContainer)
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isLogged: state.auth.isLogged
    }
}
