import React from 'react';
import './App.css';
import Main from "./neko-1-ui/ui-base/Main";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Main/>
            </BrowserRouter>
        </div>
    );
};

export default App;
