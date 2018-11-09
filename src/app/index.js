import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={SayApp} />
                <Route exact path="/guild/:guildName" component={SayGuild} />
                <Route component={Say404} />
            </Switch>
        </Router>
    );
}

function SayApp() {
    return (
        <div>
            app <Link to="./guild/a guild"> linking </Link>{" "}
        </div>
    );
}

function SayGuild({ match }) {
    return <div>{match.params.guildName}</div>;
}

function Say404() {
    return <div>404</div>;
}

export default App;
