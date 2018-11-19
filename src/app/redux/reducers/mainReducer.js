const currentRaid = "Throne of Thunder";

const defaultState = {
    compactGuilds: []
};

function mainReducer(state = defaultState, action) {
    switch (action.type) {
        case "FILL_COMPACT_GUILDS_DATA":
            let compactGuilds = action.payload.map(guild => {
                let totalBosses = 0;
                let heroicDefeated = 0;
                for (let boss in guild.progression[currentRaid]) {
                    if (guild.progression[currentRaid][boss]) {
                        heroicDefeated++;
                    }
                    totalBosses++;
                }

                return {
                    ...guild,
                    currentProgress: `${heroicDefeated}/${totalBosses} HC`
                };
            });

            return { ...state, compactGuilds };
        default:
            return state;
    }
}

export default mainReducer;
