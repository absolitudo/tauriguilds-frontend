import { combineReducers } from "redux";
import guildDataReducer from "./guildDataReducer";
import filterGuildsReducer from "./filterGuildsReducer";
import filterGuildMembersReducer from "./filterGuildMembersReducer";
import errorReducer from "./errorReducer";
import guildUpdateReducer from "./guildUpdateReducer";

export default combineReducers({
    guildData: guildDataReducer,
    guildFilter: filterGuildsReducer,
    guildMembersFilter: filterGuildMembersReducer,
    error: errorReducer,
    guildUpdate: guildUpdateReducer
});
