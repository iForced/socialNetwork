import React from "react";
import s from './Messages.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {DialogType, MessageType} from "../../redux/store";

type PropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    addMessage: () => void
    newMessageText: string
    updateMessageText: (text: string) => void
}

function Messages(props: PropsType) {
    const dialogElement = props.dialogs.map((d: DialogType) => {
        return <Dialog name={d.name} id={d.id}/>
    });
    const messageElement = props.messages.map((m: MessageType) => {
        return <Message text={m.text} id={m.id}/>
    });

    const messageInput: any = React.createRef();

    const addMessage = () => {
        props.addMessage();
        props.updateMessageText('');
    }

    const inputChangeHandler = () => {
        props.updateMessageText(messageInput.current.value)
    }

    return (
        <div className={s.messages}>
            <div className={s.dialogs_list}>
                {dialogElement}
            </div>
            <div className={s.messages_list}>
                {messageElement}
            </div>
            <textarea ref={messageInput}
                      onInput={inputChangeHandler}
                      value={props.newMessageText}
                      placeholder={"Type a message"}
            />
            <button onClick={addMessage}>Send message</button>
        </div>
    )
}

export default Messages;