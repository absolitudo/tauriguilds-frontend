import React from "react";
import { connect } from "react-redux";

import { fillCompactGuildsData } from "../redux/actions";
import { bindActionCreators } from "redux";

class AllGuilds extends React.PureComponent {
    componentDidMount() {
        fetch("https://ossified-hyacinth.glitch.me/getGuilds")
            .then(res => res.json())
            .then(res => this.props.fillCompactGuildsData(res));
    }

    render() {
        return (
            <ul>
                {this.props.compactGuilds.map(guild => (
                    <li>{guild.guildName}</li>
                ))}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return { compactGuilds: state.mainReducer.compactGuilds };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fillCompactGuildsData }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllGuilds);
