import React from 'react';
import './App.css';
import Main from "./neko-1-ui/ui-1-base/Main";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./neko-2-bll/bll-1-base/store";

// global context
const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <Main/>
                </Provider>
            </BrowserRouter>
        </div>
    );
};

export default App;
