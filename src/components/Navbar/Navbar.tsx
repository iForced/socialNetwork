import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'
import FriendsList from "./FriendsList/FriendsList";
import {NavbarType} from "../../redux/store";

function Navbar() {
    return (
        <div className={s.sidebar}>
            <nav className={s.navbar}>
                <div className={s.navbar_item}><NavLink to={"/profile"} activeClassName={s.active}>Profile</NavLink></div>
                <div className={s.navbar_item}><NavLink to={"/messages"} activeClassName={s.active}>Messages</NavLink></div>
                <div className={s.navbar_item}><NavLink to={"/news"} activeClassName={s.active}>News</NavLink></div>
                <div className={s.navbar_item}><NavLink to={"/music"} activeClassName={s.active}>Music</NavLink></div>
                <div className={s.navbar_item}><NavLink to={"/settings"} activeClassName={s.active}>Settings</NavLink></div>
            </nav>
            {/*<FriendsList  friends={props.friendsList.friends}/>*/}
        </div>
    )
}

export default Navbar;