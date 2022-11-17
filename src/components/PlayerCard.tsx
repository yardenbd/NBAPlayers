import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { handleFavoritePlayer } from "../store/slices/PlayersSlice";
import { RootState, useAppDispatch } from "../store/store";
import { IPlayer, IPlayerSlice } from "../types";
import { FavoriteButton, PlayerCardWrapper, TextElement } from "./style";

export const PlayerCard: React.FC<{ playerAttributes: IPlayer }> = ({
  playerAttributes,
}) => {
  const dispatchToStore = useAppDispatch();
  const { favoritePlayers } = useSelector<RootState, IPlayerSlice>(
    (state) => state.playersSliceReducer
  );
  const isPlayerInFavorites = favoritePlayers.find(
    (player) => player.id === playerAttributes.id
  );
  const [shouldFillStar, setShouldFillStar] = useState<boolean>(false);
  const { first_name, id, last_name, position, team } = playerAttributes;
  const iconClassName: string = !shouldFillStar
    ? "fa-regular fa-star"
    : "fa-solid fa-star";

  const handleHoverOnStar = (arg: boolean) => {
    if (isPlayerInFavorites) return;
    setShouldFillStar(arg);
  };

  useEffect(() => {
    if (isPlayerInFavorites) {
      setShouldFillStar(true);
    } else {
      setShouldFillStar(false);
    }
  }, [isPlayerInFavorites]);

  return (
    <PlayerCardWrapper>
      <TextElement>{id}</TextElement>
      <TextElement>
        {first_name} {last_name}
      </TextElement>
      <TextElement>Position : {position}</TextElement>
      <TextElement>Team : {team.name}</TextElement>
      <FavoriteButton
        onClick={() => dispatchToStore(handleFavoritePlayer(playerAttributes))}
        onMouseEnter={() => handleHoverOnStar(true)}
        onMouseLeave={() => handleHoverOnStar(false)}
      >
        <i className={iconClassName} />
      </FavoriteButton>
    </PlayerCardWrapper>
  );
};
