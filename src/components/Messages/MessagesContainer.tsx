import React from "react";
import {ActionsType, DialogType, MessageType} from "../../redux/store";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/messagesReducer";
import Messages from "./Messages";
import {StoreContext} from "../../StoreContext";

type PropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string | undefined
    dispatch: (action: ActionsType) => void
}

function MessagesContainer() {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().messagesPage
                    const addMessage = () => {
                        store.dispatch(addMessageActionCreator())
                        store.dispatch(updateMessageTextActionCreator(''))
                    }

                    const updateMessageText = (text: string | undefined) => {
                        store.dispatch(updateMessageTextActionCreator(text))
                    }
                    return <Messages
                        dialogs={state.dialogs}
                        messages={state.messages}
                        newMessageText={state.newMessageText}
                        addMessage={addMessage}
                        updateMessageText={updateMessageText}
                    />
                }
            }
        </StoreContext.Consumer>

    )
}

export default MessagesContainer;