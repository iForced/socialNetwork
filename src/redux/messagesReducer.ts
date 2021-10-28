import {DialogType, MessageType} from "../components/Messages/MessagesContainer";
import {ActionsType} from "./reduxStore";

export type MessagesPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

const
    ADD_MESSAGE = 'ADD-MESSAGE'

const initialState: MessagesPageType = {
    dialogs: [
        {id: 1, name: 'Valera'},
        {id: 2, name: 'Seryoga'},
        {id: 3, name: 'Sanya'},
        {id: 4, name: 'Grigoryan'},
    ],
    messages: [
        {id: 1, text: 'Hello'},
        {id: 2, text: 'How are you'},
        {id: 3, text: 'Who is on duty today'},
        {id: 4, text: 'Let me speak from my heart'},
    ],
}

const messagesReducer = (state: MessagesPageType = initialState, action: ActionsType): MessagesPageType => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: Math.floor(Math.random() * 10),
                text: action.messageText,
            }
            return {...state, messages: [...state.messages, newMessage]}
        default:
            return state
    }
}

export const addMessageActionCreator = (messageText: string) => {
    return {type: ADD_MESSAGE, messageText} as const
}

export default messagesReducer