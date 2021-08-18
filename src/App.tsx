import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import {RootStateType} from "./redux/state";
import {BrowserRouter, Route} from "react-router-dom";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props: RootStateType) {
    return (
        <div className="App">
            <Header/>
            <main className={"main"}>
                <BrowserRouter>
                <Navbar friendsList={props.navbar.friendsList}/>
                    <Route path={"/profile"} render={ () => <Profile posts={props.profilePage.posts}
                                                                     addPost={props.profilePage.addPost}
                                                                     newPostText={props.profilePage.newPostText}
                                                                     updateNewPostText={props.profilePage.updateNewPostText}/> }
                    />
                    <Route path={"/messages"} render={ () => <Messages dialogs={props.messagesPage.dialogs}
                                                                       messages={props.messagesPage.messages}
                                                                       addMessage={props.messagesPage.addMessage}
                                                                       newMessageText={props.messagesPage.newMessageText}
                                                                       updateMessageText={props.messagesPage.updateMessageText}/> }
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
