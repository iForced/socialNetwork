import React from "react";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    text: string
}
type MapStateToPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string | undefined
}
type MapDispatchToPropsType = {
    updateMessageText: (text: string | undefined) => void
    addMessage: () => void
}
export type MessagesPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateMessageText: (text: string | undefined) => {
            dispatch(updateMessageTextActionCreator(text))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
            dispatch(updateMessageTextActionCreator(''))
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;