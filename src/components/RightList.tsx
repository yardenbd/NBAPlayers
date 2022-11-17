import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { IPlayerSlice } from "../types";
import { PlayerCard } from "./PlayerCard";
import { ListWrapper, PlayersList } from "./style";

export const RightList: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>("");
  const { favoritePlayers } = useSelector<RootState, IPlayerSlice>(
    (state) => state.playersSliceReducer
  );
  const listOfPlayersToRender = favoritePlayers.map((player) => (
    <PlayerCard key={player.id} playerAttributes={player} />
  ));
  return (
    <ListWrapper>
      <section className="header-section">
        <h1>Favorite Players</h1>
        <input
          type={"color"}
          onChange={(ev) => setBackgroundColor(ev.target.value)}
        />
      </section>

      <PlayersList backgroundColor={backgroundColor}>
        {listOfPlayersToRender}
      </PlayersList>
    </ListWrapper>
  );
};
