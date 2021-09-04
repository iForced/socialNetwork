import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {ActionsType, RootStateType} from "./redux/store";
import MessagesContainer from "./components/Messages/MessagesContainer";

type PropsType = {
    state: RootStateType
    dispatch: (action: ActionsType) => void
}

function App() {
    return (
        <div className="App">
            <Header/>
            <main className={"main"}>
                <BrowserRouter>
                    <Navbar />
                    <Route path={"/profile"} render={() => <Profile />}
                    />
                    <Route path={"/messages"} render={() => <MessagesContainer/>}
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
