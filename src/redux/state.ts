export type PostType = {
    id: number
    text: string
    likes: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
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
    newMessageText: string
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
    subscribe: (observer: RootStateType) => void
    addPost: () => void
    updatePostText: (text: string) => void
    addMessage: () => void
    updateMessageText: (text: string) => void
}

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
    _rerender (state: RootStateType) {
        console.log('state rendered')
    },
    getState() {
      return this._state
    },
    subscribe(observer: any) {
        this._rerender = observer
    },
    addPost () {
        let newPost = {
            id: this._state.profilePage.posts[store._state.profilePage.posts.length - 1].id + 1,
            text: this._state.profilePage.newPostText,
            likes: 22
        }
        this._state.profilePage.posts.push(newPost)
        this._rerender(this._state)
    },
    updatePostText (text: string) {
        this._state.profilePage.newPostText = text
        this._rerender(this._state)
    },
    addMessage () {
        let newMessage = {
            id: this._state.messagesPage.messages[this._state.messagesPage.messages.length - 1].id + 1,
            text: this._state.messagesPage.newMessageText,
            likes: 22
        }
        this._state.messagesPage.messages.push(newMessage)
        this._rerender(this._state)
    },
    updateMessageText (text: string) {
        this._state.messagesPage.newMessageText = text
        this._rerender(this._state)
    },
}

export default store;