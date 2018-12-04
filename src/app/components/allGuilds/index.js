import React from "react";
import { connect } from "react-redux";

import ShowGuilds from "../showGuilds";
import SearchGuild from "../searchGuild";

import { fillGuildsData, setError } from "../../redux/actions";
import { bindActionCreators } from "redux";

/* TEMP FOR DEV */
import data from "./data";

class AllGuilds extends React.PureComponent {
    componentDidMount() {
        this.props.fillGuildsData(data);
        /*
        fetch("https://ossified-hyacinth.glitch.me/getGuilds")
            .then(res => res.json())
            .then(res => {
                if (res.err) {
                    throw res.err;
                }
                this.props.fillGuildsData(res);
            })
            .catch(err => this.props.setError(err));
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
    return bindActionCreators({ fillGuildsData, setError }, dispatch);
}

export default connect(
    null,
    mapDispatchToProps
)(AllGuilds);
