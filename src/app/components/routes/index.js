import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AllGuilds from "../allGuilds";
import GuildView from "../guildView";
import NotFound from "../notFound";
import HandleError from "../handleError";

function Routes() {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <HandleError>
                            <AllGuilds />
                        </HandleError>
                    )}
                />
                <Route
                    exact
                    path="/guild"
                    render={() => (
                        <HandleError>
                            <GuildView />
                        </HandleError>
                    )}
                />
                <Route
                    render={() => (
                        <HandleError>
                            <NotFound />
                        </HandleError>
                    )}
                />
            </Switch>
        </Router>
    );
}

export default Routes;
