import { combineReducers } from "@reduxjs/toolkit";
import { playersSliceReducer } from "../slices/PlayersSlice";
export const rootReducer = combineReducers({ playersSliceReducer });
