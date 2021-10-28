import React from "react";
import {addMessageActionCreator} from "../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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
}
type MapDispatchToPropsType = {
    addMessage: (messageText: string) => void
}
export type MessagesPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: (messageText) => {
            dispatch(addMessageActionCreator(messageText))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages)