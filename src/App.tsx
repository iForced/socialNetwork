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
import {StoreType} from "./redux/store";

type PropsType = {
    store: StoreType
}

function App(props: PropsType) {
    return (
        <div className="App">
            <Header/>
            <main className={"main"}>
                <BrowserRouter>
                <Navbar friendsList={props.store.getState().navbar.friendsList}/>
                    <Route path={"/profile"} render={ () => <Profile posts={props.store.getState().profilePage.posts}
                                                                     addPost={props.store.addPost.bind(props.store)}
                                                                     newPostText={props.store.getState().profilePage.newPostText}
                                                                     updatePostText={props.store.updatePostText.bind(props.store)}/> }
                    />
                    <Route path={"/messages"} render={ () => <Messages dialogs={props.store.getState().messagesPage.dialogs}
                                                                       messages={props.store.getState().messagesPage.messages}
                                                                       addMessage={props.store.addMessage.bind(props.store)}
                                                                       newMessageText={props.store.getState().messagesPage.newMessageText}
                                                                       updateMessageText={props.store.updateMessageText.bind(props.store)}/> }
                    />
                    <Route path={"/news"} render={ () => <News/> }/>
                    <Route path={"/music"} render={ () => <Music/> }/>
                    <Route path={"/settings"} render={ () => <Settings/> }/>
                </BrowserRouter>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
