import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { servers } from "./helpers";

import { fillSelectedGuildData } from "../../redux/actions";

// TEMP FOR DEV
import data from "./data.json";

class GuildView extends React.PureComponent {
    componentDidMount() {
        this.props.fillSelectedGuildData(data);

        /*
        const params = new URLSearchParams(this.props.location.search);
        const server = params.get("server").toLocaleLowerCase();
        const guildName = params.get("guildName");

        fetch("https://ossified-hyacinth.glitch.me/getGuild", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                guildName: guildName,
                realm: servers[server]
            })
        })
            .then(res => res.json())
            .then(res => this.props.fillSelectedGuildData(res));
            */
    }

    render() {
        if (this.props.guildData) {
            return <div>{this.props.guildData.guildName}</div>;
        }
        return <div>No data or loading</div>;
    }
}

function mapStateToProps(state) {
    return { guildData: state.guildData.selectedGuild };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fillSelectedGuildData }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GuildView);
