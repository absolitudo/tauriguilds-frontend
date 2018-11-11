import React from "react";
import { connect } from "react-redux";

import SearchIcon from "../../../assets/search-icon";
import GuildView from "../guildView";

import { fillCompactGuildsData } from "../../redux/actions";
import { bindActionCreators } from "redux";

class AllGuilds extends React.PureComponent {
    componentDidMount() {
        /*
        fetch("https://ossified-hyacinth.glitch.me/getGuilds")
            .then(res => res.json())
            .then(res => this.props.fillCompactGuildsData(res));
        */
    }

    submitSearch(e) {
        e.preventDefault();
        const guildName = e.target.guildName.value;
        console.log(guildName);
    }

    render() {
        return (
            <main className="frontpage">
                <form onSubmit={this.submitSearch} id="search-guild">
                    <div className="input-wrapper">
                        <input
                            name="guildName"
                            type="text"
                            required
                            className="input-search"
                            placeholder="Search guild..."
                            autoComplete="off"
                        />
                        <button type="submit" className="button-search">
                            <SearchIcon />
                        </button>
                    </div>
                </form>

                <GuildView />
            </main>
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
