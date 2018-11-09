import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import store from "./redux";
import { Provider } from "react-redux";

import AllGuilds from "./allGuilds";
import GuildView from "./guildView";
import NotFound from "./notFound";

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
