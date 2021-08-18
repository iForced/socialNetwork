import React from "react";
import s from './FriendsList.module.css'
import Friend from "./Friend";
import {FriendsListType, FriendType} from "../../../redux/state";

function FriendsList(props: FriendsListType) {
    const friendElement = props.friends.map((f: FriendType) => {
        return <Friend id={f.id} name={f.name} avatar={f.avatar}/>
    });
    return (
        <div className={s.friendsList}>
            {friendElement}
        </div>
    )
}

export default FriendsList;