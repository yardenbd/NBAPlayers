export interface ITeam {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
}
export interface IPlayer {
  id: number;
  first_name: string;
  height_feet?: number;
  height_inches?: number;
  last_name: string;
  position: string;
  team: ITeam;
  weight_pounds?: number;
}

export interface IPlayerSlice {
  players: IPlayer[];
  favoritePlayers: IPlayer[];
}
