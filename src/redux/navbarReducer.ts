import {ActionsType, NavbarType} from "./store";

const initialState = {
    friendsList: {
        friends: [
            {id: 1, name: 'Valera', avatar: 'path'},
            {id: 2, name: 'Seryoga', avatar: 'path'},
            {id: 3, name: 'Sanya', avatar: 'path'},
        ]
    }
}

const navbarReducer = (state: NavbarType = initialState, action: ActionsType) => {


    return state
}

export default navbarReducer