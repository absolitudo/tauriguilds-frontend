import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Autorenew from "@material-ui/icons/Autorenew";

import {
    setGuildUpdating,
    fillSelectedGuildData,
    setGuildUpdatingError
} from "../../redux/actions";
import { whenWas, canUpdate } from "./helpers";

function GuildUpdate(props) {
    const {
        guildData,
        guildUpdate,
        setGuildUpdating,
        fillSelectedGuildData,
        setGuildUpdatingError
    } = props;
    return (
        <section className="update-guild">
            <span className="update-guild-last-update">
                Last update: {whenWas(guildData.lastUpdated)}
                {canUpdate(guildData.lastUpdated) && (
                    <Autorenew
                        onClick={() =>
                            !guildUpdate.isUpdating &&
                            updateGuild(guildData, {
                                setGuildUpdating,
                                fillSelectedGuildData,
                                setGuildUpdatingError
                            })
                        }
                        className={
                            "autorenew " +
                            (guildUpdate.isUpdating
                                ? "autorenew-updating rotate"
                                : "")
                        }
                    />
                )}
            </span>
            {guildUpdate.isUpdating && (
                <p className="update-guild-info green">
                    Updating, this may take minutes.
                </p>
            )}
            {guildUpdate.err && (
                <p className="update-guild-info red">{guildUpdate.err}</p>
            )}
        </section>
    );
}

function updateGuild(guildData, actions) {
    actions.setGuildUpdating(true);
    fetch("https://ossified-hyacinth.glitch.me/addguild", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            guildName: guildData.guildName,
            realm: guildData.realm
        })
    })
        .then(res => res.json())
        .then(res => {
            if (res.err) throw res.err;
            actions.fillSelectedGuildData(res);
        })
        .catch(err => actions.setGuildUpdatingError(err));
}

function mapStateToProps(state) {
    return {
        guildUpdate: state.guildUpdate,
        guildData: {
            lastUpdated: state.guildData.selectedGuild.lastUpdated,
            realm: state.guildData.selectedGuild.realm,
            guildName: state.guildData.selectedGuild.guildName
        }
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            setGuildUpdating,
            fillSelectedGuildData,
            setGuildUpdatingError
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GuildUpdate);
