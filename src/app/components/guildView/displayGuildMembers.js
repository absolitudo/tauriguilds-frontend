import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";

import { changeGuildMembersFilter } from "../../redux/actions";

function TableTitle() {
    return (
        <Toolbar>
            <Typography variant="h6" id="member-table-title">
                Guild members
            </Typography>
        </Toolbar>
    );
}

function GuildMember({ member }) {
    return (
        <TableRow hover>
            <TableCell component="th">{member.name}</TableCell>
            <TableCell>{member.class}</TableCell>
            <TableCell>{member.race}</TableCell>
            <TableCell>{member.level}</TableCell>
            <TableCell>{member.rank_name}</TableCell>
        </TableRow>
    );
}

class MemberTableColumns extends React.Component {
    constructor(props) {
        super(props);
        this.handleSortChange = this.handleSortChange.bind(this);
    }

    handleSortChange(id) {
        this.props.changeGuildMembersFilter({
            selectedFilter: id,
            direction:
                id !== this.props.data.filters.selectedFilter
                    ? "desc"
                    : this.props.data.filters.direction === "asc"
                    ? "desc"
                    : "asc"
        });
    }

    render() {
        const {
            tableColumns,
            filters: { selectedFilter, direction }
        } = this.props.data;

        return (
            <TableHead>
                <TableRow>
                    {tableColumns.map(column => (
                        <TableCell key={column.id}>
                            {column.selectable ? (
                                <Tooltip
                                    title="Sort"
                                    placement={"bottom-end"}
                                    enterDelay={300}
                                >
                                    <TableSortLabel
                                        active={column.id === selectedFilter}
                                        direction={direction}
                                        onClick={() =>
                                            this.handleSortChange(column.id)
                                        }
                                    >
                                        {column.label}
                                    </TableSortLabel>
                                </Tooltip>
                            ) : (
                                <TableCell>{column.label}</TableCell>
                            )}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
        );
    }
}

class MembersTable extends React.Component {
    render() {
        let guildMembers = [];
        const { changeGuildMembersFilter, guildMembersFilter } = this.props;

        for (let member in this.props.guildMembers) {
            guildMembers.push(this.props.guildMembers[member]);
        }

        return (
            <Paper>
                <TableTitle />
                <div>
                    <Table aria-labelledby="member-table-title">
                        <MemberTableColumns
                            changeGuildMembersFilter={changeGuildMembersFilter}
                            data={guildMembersFilter}
                        />
                        <TableBody>
                            {guildMembers.map(member => (
                                <GuildMember
                                    member={member}
                                    key={member.name}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </Paper>
        );
    }
}

function mapStateToProps(state) {
    return {
        guildMembersFilter: state.guildMembersFilter,
        guildMembers: state.guildData.selectedGuild.guildList
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeGuildMembersFilter }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MembersTable);
