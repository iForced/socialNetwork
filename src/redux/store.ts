import profileReducer, {addPostActionCreator, updatePostTextActionCreator} from "./profileReducer";
import messagesReducer, {addMessageActionCreator, updateMessageTextActionCreator} from "./messagesReducer";
import navbarReducer from "./navbarReducer";

export type PostType = {
    id: number
    text: string
    likes: number
}
type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string | undefined
}
type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    text: string
}
type MessagesPageType = {
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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._state.navbar = navbarReducer(this._state.navbar, action)

        this._rerender(this._state)
    },
}

export default store;