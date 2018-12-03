import React from "react";

import "./index.sass";

import store from "./redux";
import { Provider } from "react-redux";

import Routes from "./components/routes";

function App() {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
}

export default App;
