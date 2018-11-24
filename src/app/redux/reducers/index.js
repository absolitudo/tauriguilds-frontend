import guildDataReducer from "./guildDataReducer";
import filterGuildsReducer from "./filterGuildsReducer";
import { combineReducers } from "redux";

export default combineReducers({
    guildData: guildDataReducer,
    guildFilter: filterGuildsReducer
});
