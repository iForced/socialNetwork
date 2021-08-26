import React from "react";
import s from './Messages.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {
    ActionsType,
    addMessageActionCreator,
    DialogType,
    MessageType,
    updateMessageTextActionCreator
} from "../../redux/store";

type PropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string | undefined
    dispatch: (action: ActionsType) => void
}

function Messages(props: PropsType) {
    const dialogElement = props.dialogs.map((d: DialogType) => {
        return <Dialog key={d.id} name={d.name} id={d.id}/>
    });
    const messageElement = props.messages.map((m: MessageType) => {
        return <Message key={m.id} text={m.text} id={m.id}/>
    });

    const messageInput = React.createRef<HTMLTextAreaElement>();

    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
        props.dispatch(updateMessageTextActionCreator(''))
    }

    const inputChangeHandler = () => {
        props.dispatch(updateMessageTextActionCreator(messageInput.current?.value))
    }

    return (
        <div className={s.messages}>
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
    )
}

export default Messages;