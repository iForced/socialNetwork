import './index.css';
import ReactDOM from "react-dom";
import React from "react";
import App from "../src/App";
import reportWebVitals from './reportWebVitals';
import {RootStateType} from "./redux/store";
import store from "./redux/reduxStore";

const rerender = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerender(store.getState())

store.subscribe(() => {
    const state = store.getState()
    rerender(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
