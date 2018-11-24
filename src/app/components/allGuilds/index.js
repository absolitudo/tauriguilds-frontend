import React from "react";
import { connect } from "react-redux";

// TEMPORARY FOR DEV
import data from "./data.json";

import ShowGuilds from "../showGuilds";
import SearchGuild from "../searchGuild";

import { fillGuildsData } from "../../redux/actions";
import { bindActionCreators } from "redux";

class AllGuilds extends React.PureComponent {
    componentDidMount() {
        this.props.fillGuildsData(data);
        /*
        fetch("https://ossified-hyacinth.glitch.me/getGuilds")
            .then(res => res.json())
            .then(res => this.props.fillGuildsData(res));
            */
    }

    render() {
        return (
            <main className="frontpage">
                <SearchGuild />
                <ShowGuilds />
            </main>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fillGuildsData }, dispatch);
}

export default connect(
    null,
    mapDispatchToProps
)(AllGuilds);
