import { combineReducers } from "redux";
import guildDataReducer from "./guildDataReducer";
import filterGuildsReducer from "./filterGuildsReducer";

export default combineReducers({
    guildData: guildDataReducer,
    guildFilter: filterGuildsReducer
});
