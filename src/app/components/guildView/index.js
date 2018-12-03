import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { serversToLower } from "./helpers";

import { fillSelectedGuildData } from "../../redux/actions";

import Progression from "./progression";
import ClassDistribution from "./classDistribution";
import DisplayGuildMembers from "./displayGuildMembers";

import factions from "../../../constants/factions";

// TEMP FOR DEV
import data from "./data.json";

class GuildView extends React.PureComponent {
    componentDidMount() {
        this.props.fillSelectedGuildData(data);

        /*
        const params = new URLSearchParams(this.props.location.search);
        const server = params.get("server").toLocaleLowerCase();
        const guildName = params.get("guildName");
        const servers = serversToLower()

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
        const { guildData } = this.props;
        if (guildData) {
            return (
                <main className="guild-view">
                    <div className="guild-name-container">
                        <h1>{guildData.guildName}</h1>
                        <p>{guildData.realm}</p>
                        <p>{factions[guildData.gFaction + 1]}</p>
                    </div>
                    <ClassDistribution guildList={guildData.guildList} />
                    <div className="guild-view-container">
                        <Progression progression={guildData.progression} />
                        <DisplayGuildMembers />
                    </div>
                </main>
            );
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
