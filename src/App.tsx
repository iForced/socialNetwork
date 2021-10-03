import React from 'react';
import './App.css';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <HeaderContainer/>
                <main className={"main"}>
                    <Navbar/>
                    <Route
                        path={"/profile/:userID?"}
                        render={() => <ProfileContainer/>}
                    />
                    <Route
                        path={"/messages"}
                        render={() => <MessagesContainer/>}
                    />
                    <Route
                        path={"/users"}
                        render={() => <UsersContainer/>}
                    />
                    <Route
                        path={"/news"}
                        render={() => <News/>}
                    />
                    <Route
                        path={"/music"}
                        render={() => <Music/>}
                    />
                    <Route
                        path={"/settings"}
                        render={() => <Settings/>}
                    />
                </main>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
