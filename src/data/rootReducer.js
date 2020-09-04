import { combineReducers } from "redux";
import { announcementReducer } from "./announcementReducer";

export const rootReducer = combineReducers({
  announcementState: announcementReducer,
})