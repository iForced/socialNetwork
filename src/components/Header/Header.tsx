import React from "react";
import s from './Header.module.css'
import logo from './../../logo.svg'

function Header() {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src={logo} alt={"logo"}/>
            </div>
            <h1>Social network</h1>
        </header>
    )
}

export default Header;