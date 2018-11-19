import React from "react";
import { connect } from "react-redux";

// TEMPORARY FOR DEV
import data from "./data.json";

import SearchIcon from "../../../assets/search-icon";
import ShowGuilds from "../showGuilds";

import { fillCompactGuildsData } from "../../redux/actions";
import { bindActionCreators } from "redux";

class AllGuilds extends React.PureComponent {
    constructor(props) {
        super(props);
        this.submitSearch = this.submitSearch.bind(this);
    }

    componentDidMount() {
        this.props.fillCompactGuildsData(data);
        /*
        fetch("https://ossified-hyacinth.glitch.me/getGuilds")
            .then(res => res.json())
            .then(res => this.props.fillCompactGuildsData(res));
            */
    }

    submitSearch(e) {
        e.preventDefault();
        const guildName = e.target.guildName.value;
        this.props.history.push(`guild/${guildName}`);
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

                <ShowGuilds />
            </main>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fillCompactGuildsData }, dispatch);
}

export default connect(
    null,
    mapDispatchToProps
)(AllGuilds);
