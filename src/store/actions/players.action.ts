import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllPlayers } from "../../services/APIService";
import { IPlayer } from "../../types";

export const getNBAPlayers = createAsyncThunk(
  "plyaersSlice/getNBAPlayers",
  async (_, thunkAPI) => {
    try {
      const payload = await getAllPlayers();
      return payload as IPlayer[];
    } catch (err) {
      return thunkAPI.rejectWithValue("Failed to load players");
    }
  }
);
