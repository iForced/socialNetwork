import {ActionsType, MessagesPageType} from "./store";


const
    ADD_MESSAGE = 'ADD-MESSAGE',
    UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

const initialState = {
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
    newMessageText: ''
}


const messagesReducer = (state: MessagesPageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (state.newMessageText) {
                let newMessage = {
                    id: state.messages[state.messages.length - 1].id + 1,
                    text: state.newMessageText,
                }
                state.messages.push(newMessage)
            }
            return state
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.text
            return state
        default:
            return state
    }
}

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE} as const
}
export const updateMessageTextActionCreator = (text: string | undefined) => {
    return {type: UPDATE_MESSAGE_TEXT, text: text} as const
}

export default messagesReducer