import React from "react";

import { getClassPictures } from "./helpers";

function ClassDistribution({ guildList }) {
    let countClass = {};
    let totalPlayers = 0;
    let classes = [];
    let classPictures = getClassPictures();

    for (let memberKey in guildList) {
        if (!countClass[guildList[memberKey].class]) {
            countClass[guildList[memberKey].class] = 0;
        }
        countClass[guildList[memberKey].class] += 1;
        totalPlayers += 1;
    }

    for (let playerClass in countClass) {
        classes.push({
            dist:
                Math.floor((countClass[playerClass] / totalPlayers) * 1000) /
                    10 +
                "%",
            type: playerClass,
            picture: classPictures[playerClass]
        });
    }

    return (
        <div className="class-dist-container">
            <div className="class-dist">
                {classes.map(({ type, dist, picture }) => (
                    <div
                        key={type}
                        className="class-container"
                        style={{ background: "url(" + picture + ")" }}
                    >
                        <span className="outline">{dist}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ClassDistribution;
