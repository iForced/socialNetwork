import React from "react";
import s from './Message.module.css';
import {MessageType} from "../../../redux/state";

function Message(props: MessageType) {
    return (
        <div className={s.messages_item}>
            {props.text}
        </div>
    )
}

export default Message;