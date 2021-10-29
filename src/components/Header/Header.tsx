import React from "react";
import s from './Header.module.css'
import logo from './../../logo.svg'
import {NavLink} from "react-router-dom";

type PropsType = {
    id: null | number
    email: null | string
    login: null | string
    isLogged: boolean
}

function Header(props: PropsType) {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src={logo} alt={"logo"}/>
            </div>
            <h1>Social network</h1>
            <div className={s.login}>
                {
                    props.isLogged
                    ? <div>{props.login}</div>
                    : <NavLink to={"/login"}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;