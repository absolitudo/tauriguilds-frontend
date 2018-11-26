import React from "react";

class GuildView extends React.PureComponent {
    render() {
        const params = new URLSearchParams(this.props.location.search);
        const server = params.get("server");
        const guildName = params.get("guildName");
        return (
            <div>
                {server} {guildName}
            </div>
        );
    }
}

export default GuildView;
