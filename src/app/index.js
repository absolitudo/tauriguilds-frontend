import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.sass";

import store from "./redux";
import { Provider } from "react-redux";

import AllGuilds from "./components/allGuilds";
import GuildView from "./components/guildView";
import NotFound from "./components/notFound";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={AllGuilds} />
                    <Route
                        exact
                        path="/guild/:guildName"
                        component={GuildView}
                    />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
