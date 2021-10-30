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
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {authThunk} from "./redux/authReducer";
import {AppStateType} from "./redux/reduxStore";
import Preloader from "./common/Preloader";
import {initializeApp} from "./redux/appReducer";

type MapStateToPropsType = {
    initialized: boolean
}
type MapDispatchToPropsType = {
    initializeApp: () => void
}

type AppPropsType = MapStateToPropsType & MapDispatchToPropsType

class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
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
                        <Route
                            path={"/login"}
                            render={() => <Login/>}
                        />
                    </main>
                    <Footer/>
                </BrowserRouter>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        initialized: state.app.isInitialized
    }
}

export default compose(
    connect(mapStateToProps, {initializeApp})(App)
);
