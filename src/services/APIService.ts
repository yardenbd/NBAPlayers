const NBAPlayersURL = "https://www.balldontlie.io/api/v1/plers";
export const getAllPlayers = async () => {
  return fetch(NBAPlayersURL)
    .then((response) => response.json())
    .then((data) => data.data);
};
