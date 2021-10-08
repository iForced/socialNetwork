import React from "react";
import s from './Messages.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {DialogType, MessagesPropsType, MessageType} from "./MessagesContainer";
import {Redirect} from "react-router-dom";

function Messages(props: MessagesPropsType) {
    const dialogElement = props.dialogs.map((d: DialogType) => {
        return <Dialog key={d.id} name={d.name} id={d.id}/>
    });
    const messageElement = props.messages.map((m: MessageType) => {
        return <Message key={m.id} text={m.text} id={m.id}/>
    });

    const messageInput = React.createRef<HTMLTextAreaElement>();

    const addMessage = () => {
        props.addMessage()
    }

    const inputChangeHandler = () => {
        props.updateMessageText(messageInput.current?.value)
    }

    return (
        props.isLogged
            ? <div className={s.messages}>
                <div className={s.dialogs_list}>
                    {dialogElement}
                </div>
                <div className={s.messages_list}>
                    {messageElement}
                </div>
                <textarea
                    ref={messageInput}
                    onInput={inputChangeHandler}
                    value={props.newMessageText}
                    placeholder={"Type a message"}
                />
                <button onClick={addMessage}>Send message</button>
            </div>
            : <Redirect to={"/login"}/>
    )
}

export default Messages;