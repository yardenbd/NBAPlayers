import { useEffect } from "react";
import { getNBAPlayers } from "./store/actions/players.action";
import { RootState, useAppDispatch } from "./store/store";
import "./App.css";
import { LeftList } from "./components/LeftList";
import { RightList } from "./components/RightList";
import { useSelector } from "react-redux";
import { IPlayerSlice } from "./types";
const App = (): JSX.Element => {
  const dispatchToStore = useAppDispatch();
  const { hasError } = useSelector<RootState, IPlayerSlice>(
    (state) => state.playersSliceReducer
  );
  const renderErrorMessage = hasError&&<h1 className="error-meessage">Cannot get players</h1>
  useEffect(() => {
    dispatchToStore(getNBAPlayers());
  }, [dispatchToStore]);
  return (
    <div className="App">
      {renderErrorMessage}
      <LeftList />
      <RightList />
    </div>
  );
};

export default App;
