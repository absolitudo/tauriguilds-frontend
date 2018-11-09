import React from "react";

function GuildView(props) {
    return <div>{props.match.params.guildName}</div>;
}

export default GuildView;
