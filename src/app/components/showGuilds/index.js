import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import currentInstance from "../../../constants/currentInstance";
import applyFilters from "./helpers";

function ShowGuilds(props) {
    return (
        <div className="guilds-container">
            {applyFilters(props.guilds, props.filters).map((guild, index) => (
                <Link
                    to={"/guild/" + guild.guildName}
                    key={index}
                    className={
                        "guild-card guild-card-" +
                        (guild.gFaction === 0 ? "alliance" : "horde")
                    }
                >
                    <div className="guild-card-shader" />
                    <div className="guild-card-info">
                        <p className="guild-card-info-name">
                            {guild.guildName}
                        </p>
                        <p className="guild-card-info-realm">{guild.realm}</p>
                        <p className="guild-card-info-progress">
                            {currentInstance} {guild.currentProgress}
                        </p>
                        <p className="guild-card-info-members">
                            {guild.guildMembersCount} members
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

function mapStateToProps(state) {
    return { guilds: state.guildData.guilds, filters: state.guildFilter };
}

export default connect(mapStateToProps)(ShowGuilds);
