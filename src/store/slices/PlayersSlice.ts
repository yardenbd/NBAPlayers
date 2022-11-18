import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlayer, IPlayerSlice } from "../../types";
import { getNBAPlayers } from "../actions/players.action";

const initialState: IPlayerSlice = {
  players: [],
  favoritePlayers: [],
  hasError: false,
};

const playersSlice = createSlice({
  name: "playersSlice",
  initialState,
  reducers: {
    handleFavoritePlayer(state, { payload }: PayloadAction<IPlayer>) {
      const isPlayerInFavoriteList = state.favoritePlayers.find(
        (player) => player.id === payload.id
      );
      if (isPlayerInFavoriteList) {
        state.favoritePlayers = state.favoritePlayers.filter(
          (player) => player.id !== isPlayerInFavoriteList.id
        );
        return;
      }
      state.favoritePlayers.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getNBAPlayers.fulfilled,
        (state, { payload }: PayloadAction<IPlayer[]>) => {
          state.players = payload;
        }
      )
      .addCase(getNBAPlayers.rejected, (state) => {
        state.hasError = true;
      });
  },
});

export const { handleFavoritePlayer } = playersSlice.actions;
export const playersSliceReducer = playersSlice.reducer;
