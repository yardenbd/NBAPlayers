import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { IPlayerSlice } from "../types";
import { PlayerCard } from "./PlayerCard";
import { PlayersList, ListWrapper } from "./style";

export const LeftList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { players } = useSelector<RootState, IPlayerSlice>(
    (state) => state.playersSliceReducer
  );
  const filteredPlayers = players.filter(({ first_name, last_name }) => {
    const playerFullName = `${first_name} ${last_name}`;
    return playerFullName.toLowerCase().includes(searchQuery.toLowerCase());
  });
  const listOfPlayersToRender = filteredPlayers.map((player) => (
    <PlayerCard key={player.id} playerAttributes={player} />
  ));
  return (
    <ListWrapper>
      <section className="header-section">
        <h1>All Players</h1>
        <input onChange={(ev) => setSearchQuery(ev.target.value)} />
      </section>
      <PlayersList>{listOfPlayersToRender}</PlayersList>
    </ListWrapper>
  );
};
