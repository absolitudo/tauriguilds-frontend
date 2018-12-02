import { combineReducers } from "redux";
import guildDataReducer from "./guildDataReducer";
import filterGuildsReducer from "./filterGuildsReducer";
import filterGuildMembersReducer from "./filterGuildMembersReducer";

export default combineReducers({
    guildData: guildDataReducer,
    guildFilter: filterGuildsReducer,
    guildMembersFilter: filterGuildMembersReducer
});
