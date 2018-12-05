import React from "react";

import "./index.sass";

import store from "./redux";
import { Provider } from "react-redux";

import Routes from "./components/routes";
import Footer from "./components/footer";

function App() {
    return (
        <React.Fragment>
            <Provider store={store}>
                <Routes />
            </Provider>
            <Footer />
        </React.Fragment>
    );
}

export default App;
