import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {ActionsType, RootStateType} from "./redux/store";
import MessagesContainer from "./components/Messages/MessagesContainer";

type PropsType = {
    state: RootStateType
    dispatch: (action: ActionsType) => void
}

function App(props: PropsType) {
    return (
        <div className="App">
            <Header/>
            <main className={"main"}>
                <BrowserRouter>
                    <Navbar friendsList={props.state.navbar.friendsList}/>
                    <Route path={"/profile"} render={() => <Profile
                        posts={props.state.profilePage.posts}
                        newPostText={props.state.profilePage.newPostText}
                        dispatch={props.dispatch}/>}
                    />
                    <Route path={"/messages"} render={() => <MessagesContainer
                        dialogs={props.state.messagesPage.dialogs}
                        messages={props.state.messagesPage.messages}
                        newMessageText={props.state.messagesPage.newMessageText}
                        dispatch={props.dispatch}/>}
                    />
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>
                </BrowserRouter>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
