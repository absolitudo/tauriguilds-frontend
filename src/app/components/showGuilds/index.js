import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import LinearProgress from "@material-ui/core/LinearProgress";

import { name as currentRaid } from "../../../constants/currentRaid";
import factions from "../../../constants/factions";
import { lastBoss } from "../../../constants/raidInfo";
import { applyFilters } from "./helpers";
import { convertServerName } from "./helpers";

function ShowGuilds({ guilds, filters }) {
    if (guilds.length) {
        return (
            <Paper className="guilds-container">
                <div className="table-container">
                    <Table className="table">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <span>Guild name </span>(clickable)
                                </TableCell>
                                <TableCell>
                                    <span>Progression</span>
                                </TableCell>
                                <TableCell>
                                    <span>Server</span>
                                </TableCell>
                                <TableCell>
                                    <span>Faction</span>
                                </TableCell>
                                <TableCell>
                                    <span>{lastBoss}</span>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {applyFilters(guilds, filters).map(
                                (guild, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="guild-name">
                                            <Link
                                                to={
                                                    "/guild?server=" +
                                                    convertServerName(
                                                        guild.realm
                                                    ) +
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
                                            {guild.progression[currentRaid][
                                                lastBoss
                                            ] ? (
                                                <span className="green">
                                                    {new Date(
                                                        guild.progression[
                                                            currentRaid
                                                        ][lastBoss] * 1000
                                                    ).toLocaleDateString()}
                                                </span>
                                            ) : (
                                                <span className="red">
                                                    Alive
                                                </span>
                                            )}
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
    return (
        <div className="loader">
            Loading
            <LinearProgress color="secondary" />
        </div>
    );
}

function mapStateToProps(state) {
    return { guilds: state.guildData.guilds, filters: state.guildFilter };
}

export default connect(mapStateToProps)(ShowGuilds);
