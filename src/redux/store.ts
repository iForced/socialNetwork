export type PostType = {
    id: number
    text: string
    likes: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string | undefined
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    text: string
}
export type MessagesPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string | undefined
}
export type FriendType = {
    id: number
    name: string
    avatar: string
}
export type FriendsListType = {
    friends: Array<FriendType>
}
export type NavbarType = {
    friendsList: FriendsListType
}
export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    navbar: NavbarType
}
export type StoreType = {
    _state: RootStateType
    _rerender: (state: RootStateType) => void
    getState: () => RootStateType
    subscribe: (observer: (state: RootStateType) => void) => void
    dispatch: (action: ActionsType) => void
}
export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdatePostTextActionType = ReturnType<typeof updatePostTextActionCreator>
export type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
export type UpdateMessageTextActionType = ReturnType<typeof updateMessageTextActionCreator>
export type ActionsType = AddPostActionType | UpdatePostTextActionType | AddMessageActionType | UpdateMessageTextActionType

const
    ADD_POST = 'ADD-POST',
    UPDATE_POST_TEXT = 'UPDATE-POST-TEXT',
    ADD_MESSAGE = 'ADD-MESSAGE',
    UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: "My first post", likes: 10},
                {id: 2, text: "Hello world", likes: 15},
                {id: 3, text: "Memas pro kota", likes: 100},
            ],
            newPostText: ''
        },
        messagesPage: {
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
        },
        navbar: {
            friendsList: {
                friends: [
                    {id: 1, name: 'Valera', avatar: 'path'},
                    {id: 2, name: 'Seryoga', avatar: 'path'},
                    {id: 3, name: 'Sanya', avatar: 'path'},
                ]
            }
        }
    },
    _rerender () {
        console.log('state rendered')
    },
    subscribe(observer) {
        this._rerender = observer
    },
    getState() {
      return this._state
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            if (this._state.profilePage.newPostText) {
                let newPost = {
                    id: this._state.profilePage.posts[store._state.profilePage.posts.length - 1].id + 1,
                    text: this._state.profilePage.newPostText,
                    likes: 0
                }
                this._state.profilePage.posts.push(newPost)
                this._rerender(this._state)
            }
        } else if (action.type === UPDATE_POST_TEXT) {
            this._state.profilePage.newPostText = action.text
            this._rerender(this._state)
        } else if (action.type === ADD_MESSAGE) {
            if (this._state.messagesPage.newMessageText) {
                let newMessage = {
                    id: this._state.messagesPage.messages[this._state.messagesPage.messages.length - 1].id + 1,
                    text: this._state.messagesPage.newMessageText,
                }
                this._state.messagesPage.messages.push(newMessage)
                this._rerender(this._state)
            }
        } else if (action.type === UPDATE_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.text
            this._rerender(this._state)
        }
    },
}

export const addPostActionCreator = () => {
    return {type: ADD_POST} as const
}
export const updatePostTextActionCreator = (text: string | undefined) => {
    return {type: UPDATE_POST_TEXT, text: text} as const
}
export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE} as const
}
export const updateMessageTextActionCreator = (text: string | undefined) => {
    return {type: UPDATE_MESSAGE_TEXT, text: text} as const
}

export default store;