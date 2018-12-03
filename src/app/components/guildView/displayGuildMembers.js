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
import TablePagination from "@material-ui/core/TablePagination";

import characterClasses from "../../../constants/characterClasses";
import characterRaces from "../../../constants/characterRaces";
import { filterGuildMembers, capitalizeString } from "./helpers";
import {
    changeGuildMembersFilter,
    changeGuildMembersPagination
} from "../../redux/actions";

function TableTitle() {
    return (
        <Toolbar>
            <Typography variant="h6" className="member-table-title">
                Guild members
            </Typography>
        </Toolbar>
    );
}

function GuildMember({ member }) {
    return (
        <TableRow hover>
            <TableCell>{member.name}</TableCell>
            <TableCell>
                {capitalizeString(characterClasses[member.class])}
            </TableCell>
            <TableCell>{characterRaces[member.race]}</TableCell>
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
                                column.label
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
        const { filters, pagination } = this.props.guildMembersFilter;
        const { changeGuildMembersFilter, guildMembersFilter } = this.props;

        for (let member in this.props.guildMembers) {
            guildMembers.push(this.props.guildMembers[member]);
        }

        return (
            <section className="display-guild-members">
                <Paper>
                    <TableTitle />
                    <div className="display-guild-members-table">
                        <Table aria-labelledby="member-table-title">
                            <MemberTableColumns
                                changeGuildMembersFilter={
                                    changeGuildMembersFilter
                                }
                                data={guildMembersFilter}
                            />
                            <TableBody>
                                {filterGuildMembers(guildMembers, filters)
                                    .slice(
                                        pagination.currentPage *
                                            pagination.rowsPerPage,
                                        pagination.currentPage *
                                            pagination.rowsPerPage +
                                            pagination.rowsPerPage
                                    )
                                    .map(member => (
                                        <GuildMember
                                            member={member}
                                            key={member.name}
                                        />
                                    ))}
                            </TableBody>
                        </Table>
                    </div>
                    <TablePagination
                        className="display-guild-members-pagination"
                        rowsPerPageOptions={pagination.rowsPerPageOptions}
                        component="div"
                        count={guildMembers.length}
                        rowsPerPage={pagination.rowsPerPage}
                        page={pagination.currentPage}
                        backIconButtonProps={{
                            "aria-label": "Previous Page"
                        }}
                        nextIconButtonProps={{
                            "aria-label": "Next Page"
                        }}
                        onChangePage={(e, page) =>
                            this.props.changeGuildMembersPagination({
                                currentPage: page
                            })
                        }
                        onChangeRowsPerPage={(e, element) =>
                            this.props.changeGuildMembersPagination({
                                rowsPerPage: Number(element.key),
                                currentPage: 0
                            })
                        }
                    />
                </Paper>
            </section>
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
    return bindActionCreators(
        { changeGuildMembersFilter, changeGuildMembersPagination },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MembersTable);
