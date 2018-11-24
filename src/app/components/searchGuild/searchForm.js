import React from "react";
import SearchIcon from "../../../assets/search-icon";
import { withRouter } from "react-router-dom";

class SearchForm extends React.PureComponent {
    constructor(props) {
        super(props);
        this.submitSearch = this.submitSearch.bind(this);
    }

    submitSearch(e) {
        e.preventDefault();
        const guildName = e.target.guildName.value;
        this.props.history.push(`guild/${guildName}`);
    }

    render() {
        return (
            <form onSubmit={this.submitSearch}>
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
        );
    }
}

export default withRouter(SearchForm);
