import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AllGuilds from "../allGuilds";
import GuildView from "../guildView";
import NotFound from "../notFound";
import Error from "../error";

function Routes({ error }) {
    return (
        <Router>
            <Switch>
                {error.errorString && (
                    <Route
                        component={() => <Error msg={error.errorString} />}
                    />
                )}
                <Route exact path="/" component={AllGuilds} />
                <Route exact path="/guild" component={GuildView} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

function mapStateToProps(state) {
    return {
        error: state.error
    };
}

export default connect(mapStateToProps)(Routes);
