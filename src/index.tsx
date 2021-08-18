import './index.css';
import ReactDOM from "react-dom";
import React from "react";
import App from "../src/App";
import store, {RootStateType} from './redux/state';
import reportWebVitals from './reportWebVitals';

const rerender = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                store={store.getState()}
                addPost={store.addPost.bind(store)}
                updatePostText={store.updatePostText.bind(store)}
                addMessage={store.addMessage.bind(store)}
                updateMessageText={store.updateMessageText.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerender(store.getState())

store.subscribe(rerender)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
