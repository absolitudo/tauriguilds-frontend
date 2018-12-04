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
import TextField from "@material-ui/core/TextField";

import characterClasses from "../../../constants/characterClasses";
import characterRaces from "../../../constants/characterRaces";
import characterClassColors from "../../../constants/characterClassColors";
import tauriUrl from "../../../constants/tauriUrl";
import { sortGuildMembers, capitalizeString } from "./helpers";
import {
    changeGuildMembersSort,
    changeGuildMembersPagination
} from "../../redux/actions";

function TableTitle() {
    return (
        <Toolbar className="display-guild-members-toolbar">
            <Typography variant="h6" className="member-table-title">
                Guild members
            </Typography>
            <TextField
                label="Search member"
                margin="dense"
                className="member-table-name-input"
                onChange={event => console.log(event.target.value)}
            />
        </Toolbar>
    );
}

function GuildMember({ member }) {
    return (
        <TableRow hover>
            <TableCell className="name-cell">
                <a
                    href={`${tauriUrl.base}/${tauriUrl.armory}${
                        tauriUrl.character
                    }?r=${member.realm}&n=${member.name}`}
                    rel="noopener noreferrer"
                    style={{
                        color: characterClassColors[member.class]
                    }}
                    className={member.class === 5 ? "outline" : ""}
                    target="_blank"
                >
                    {member.name}
                </a>
            </TableCell>
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
        this.props.changeGuildMembersSort({
            by: id,
            direction:
                id !== this.props.data.sort.by
                    ? "desc"
                    : this.props.data.sort.direction === "asc"
                    ? "desc"
                    : "asc"
        });
    }

    render() {
        const {
            tableColumns,
            sort: { by, direction }
        } = this.props.data;

        return (
            <TableHead>
                <TableRow>
                    {tableColumns.map(column => (
                        <TableCell key={column.id}>
                            <Tooltip
                                title="Sort"
                                placement={"bottom-end"}
                                enterDelay={300}
                            >
                                <TableSortLabel
                                    active={column.id === by}
                                    direction={direction}
                                    onClick={() =>
                                        this.handleSortChange(column.id)
                                    }
                                >
                                    {column.label}
                                </TableSortLabel>
                            </Tooltip>
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
        const { sort, pagination } = this.props.guildMembersFilter;
        const { changeGuildMembersSort, guildMembersFilter } = this.props;

        for (let member in this.props.guildMembers) {
            guildMembers.push(this.props.guildMembers[member]);
        }

        return (
            <section className="display-guild-members">
                <Paper>
                    <TableTitle />
                    <div className="display-guild-members-table table-container">
                        <Table aria-labelledby="member-table-title">
                            <MemberTableColumns
                                changeGuildMembersSort={changeGuildMembersSort}
                                data={guildMembersFilter}
                            />
                            <TableBody>
                                {sortGuildMembers(guildMembers, sort)
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
        { changeGuildMembersSort, changeGuildMembersPagination },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MembersTable);
