import React from "react";
import s from './Messages.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {ActionsType, DialogType, MessageType} from "../../redux/store";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/messagesReducer";
import Messages from "./Messages";

type PropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string | undefined
    dispatch: (action: ActionsType) => void
}

function MessagesContainer(props: PropsType) {
    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
        props.dispatch(updateMessageTextActionCreator(''))
    }

    const updateMessageText = (text: string | undefined) => {
        props.dispatch(updateMessageTextActionCreator(text))
    }

    return (
        <Messages
            dialogs={props.dialogs}
            messages={props.messages}
            newMessageText={props.newMessageText}
            addMessage={addMessage}
            updateMessageText={updateMessageText}
        />
    )
}

export default MessagesContainer;