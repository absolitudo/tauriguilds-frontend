import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import { withRouter } from "react-router-dom";
import SearchIcon from "../../../assets/search-icon";

import servers from "../../../constants/servers";
import { serversToArr } from "./helpers";
delete servers["All"]; // don't want to display this here

class SearchForm extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            server: "Tauri"
        };

        this.submitSearch = this.submitSearch.bind(this);
        this.handleServerSelection = this.handleServerSelection.bind(this);
    }

    submitSearch(e) {
        e.preventDefault();
        const guildName = e.target.guildName.value;
        this.props.history.push(
            `guild?server=${this.state.server.toLowerCase()}&guildName=${guildName}`
        );
    }

    handleServerSelection(e) {
        this.setState({ ...this.state, server: e.target.value });
    }

    render() {
        return (
            <form onSubmit={this.submitSearch} className="guild-search">
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

                <FormControl className="search-select-server">
                    <Select
                        value={this.state.server}
                        onChange={this.handleServerSelection}
                        input={
                            <Input name="server" id="search-select-server" />
                        }
                        className="select"
                    >
                        {serversToArr(servers).map(serverName => (
                            <MenuItem key={serverName} value={serverName}>
                                {serverName}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </form>
        );
    }
}

export default withRouter(SearchForm);
