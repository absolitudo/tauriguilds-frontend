import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { name as currentRaid } from "../../../constants/currentRaid";
import factions from "../../../constants/factions";
import { applyFilters } from "./helpers";
import { convertServerName } from "./helpers";

function ShowGuilds(props) {
    return (
        <Paper className="guilds-container">
            <div className="table-container">
                <Table className="table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Guild name</TableCell>
                            <TableCell>Progression</TableCell>
                            <TableCell>Server</TableCell>
                            <TableCell>Faction</TableCell>
                            <TableCell>Members</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {applyFilters(props.guilds, props.filters).map(
                            (guild, index) => (
                                <TableRow key={index}>
                                    <TableCell className="guild-name">
                                        <Link
                                            to={
                                                "/guild?server=" +
                                                convertServerName(guild.realm) +
                                                "&guildName=" +
                                                guild.guildName
                                            }
                                            className={
                                                guild.gFaction === 1
                                                    ? "red"
                                                    : "blue"
                                            }
                                        >
                                            {guild.guildName}
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        {
                                            guild.progression[currentRaid]
                                                .abbreviation
                                        }
                                    </TableCell>
                                    <TableCell>{guild.realm}</TableCell>

                                    <TableCell>
                                        {factions[guild.gFaction + 1]}
                                    </TableCell>

                                    <TableCell numeric>
                                        {guild.guildMembersCount}
                                    </TableCell>
                                </TableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            </div>
        </Paper>
    );
}

function mapStateToProps(state) {
    return { guilds: state.guildData.guilds, filters: state.guildFilter };
}

export default connect(mapStateToProps)(ShowGuilds);
