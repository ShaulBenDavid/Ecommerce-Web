import { newReducer } from "../../utils/reducer/reducer.utilis";
import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user) =>
    newReducer(USER_ACTION_TYPES.SET_CURRENT_USER, user);