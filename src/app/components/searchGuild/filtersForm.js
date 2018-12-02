import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

import servers from "../../../constants/servers";
import factions from "../../../constants/factions";
import { abbreviation as currentRaid } from "../../../constants/currentRaid";
import { serversToArr, hcArr } from "./helpers";

import { changeGuildFilter } from "../../redux/actions";

class FiltersForm extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.changeGuildFilter({
            name: e.target.name,
            value: e.target.value
        });
    }

    render() {
        return (
            <form className="guild-filters">
                <FormControl className="filter">
                    <InputLabel
                        className="select-label"
                        htmlFor="select-server"
                    >
                        Server...
                    </InputLabel>
                    <Select
                        value={this.props.guildFilter.server}
                        onChange={this.handleChange}
                        input={<Input name="server" id="select-server" />}
                        className="select"
                    >
                        {serversToArr(servers).map(serverName => (
                            <MenuItem key={serverName} value={serverName}>
                                {serverName}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl className="filter">
                    <InputLabel
                        className="select-label"
                        htmlFor="select-faction"
                    >
                        Faction...
                    </InputLabel>
                    <Select
                        value={this.props.guildFilter.faction}
                        onChange={this.handleChange}
                        input={<Input name="faction" id="select-faction" />}
                        className="select"
                    >
                        {factions.map(faction => (
                            <MenuItem key={faction} value={faction}>
                                {faction}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl className="filter">
                    <InputLabel className="select-label" htmlFor="select-hc">
                        {currentRaid} HC >=
                    </InputLabel>
                    <Select
                        value={this.props.guildFilter.hc}
                        onChange={this.handleChange}
                        input={<Input name="hc" id="select-hc" />}
                        className="select"
                    >
                        {hcArr().map(num => (
                            <MenuItem key={num} value={num}>
                                {num}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl className="filter">
                    <InputLabel className="select-label" htmlFor="select-sort">
                        Sort...
                    </InputLabel>
                    <Select
                        value={this.props.guildFilter.sort}
                        onChange={this.handleChange}
                        input={<Input name="sort" id="select-sort" />}
                        className="select"
                    >
                        <MenuItem value={"Date added"}>Date added</MenuItem>
                        <MenuItem value={"Progression"}>Progression</MenuItem>
                        <MenuItem value={"Members"}>Members</MenuItem>
                    </Select>
                </FormControl>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        guildFilter: state.guildFilter
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeGuildFilter }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FiltersForm);
