import React from "react";

class GuildView extends React.PureComponent {
    render() {
        return <div>{this.props.match.params.guildName}</div>;
    }
}

export default GuildView;
