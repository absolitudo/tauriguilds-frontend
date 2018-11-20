import React from "react";
import SearchIcon from "../../../assets/search-icon";
import { withRouter } from "react-router-dom";
import { MDCSelect } from "@material/select";

class SearchGuild extends React.PureComponent {
    constructor(props) {
        super(props);
        this.submitSearch = this.submitSearch.bind(this);
        this.submitFilter = this.submitFilter.bind(this);
    }

    submitSearch(e) {
        e.preventDefault();
        const guildName = e.target.guildName.value;
        this.props.history.push(`guild/${guildName}`);
    }

    submitFilter(e) {
        e.preventDefault();
        console.log("filter submitted");
    }

    render() {
        return (
            <div className="search-guild">
                <SearchForm submitSearch={this.submitSearch} />
                <FiltersForm submitFilter={this.submitFilter} />
            </div>
        );
    }
}

function SearchForm(props) {
    return (
        <form onSubmit={props.submitSearch}>
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

class FiltersForm extends React.PureComponent {
    componentDidMount() {
        const select = new MDCSelect(document.querySelector(".mdc-select"));

        select.listen("MDCSelect:change", () => {
            alert("asd");
        });
    }
    render() {
        return (
            <form onSubmit={this.props.submitFilter}>
                <div className="mdc-select demo-width-class">
                    <input type="hidden" name="enhanced-select" />
                    <i className="mdc-select__dropdown-icon" />
                    <div className="mdc-select__selected-text" />
                    <div className="mdc-select__menu mdc-menu mdc-menu-surface demo-width-class">
                        <ul className="mdc-list">
                            <li
                                className="mdc-list-item mdc-list-item--selected"
                                data-value
                                aria-selected="true"
                            />
                            <li className="mdc-list-item" data-value="grains">
                                Bread, Cereal, Rice, and Pasta
                            </li>
                            <li
                                className="mdc-list-item"
                                data-value="vegetables"
                            >
                                Vegetables
                            </li>
                            <li className="mdc-list-item" data-value="fruit">
                                Fruit
                            </li>
                        </ul>
                    </div>
                    <span className="mdc-floating-label">
                        Pick a Food Group
                        <div className="mdc-line-ripple" />
                    </span>
                </div>
            </form>
        );
    }
}

export default withRouter(SearchGuild);
