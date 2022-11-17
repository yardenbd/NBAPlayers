import { useEffect } from "react";
import { getNBAPlayers } from "./store/actions/players.action";
import { useAppDispatch } from "./store/store";
import "./App.css";
import { LeftList } from "./components/LeftList";
import { RightList } from "./components/RightList";
function App() {
  const dispatchToStore = useAppDispatch();
  useEffect(() => {
    dispatchToStore(getNBAPlayers());
  }, [dispatchToStore]);
  return (
    <div className="App">
      <LeftList />
      <RightList />
    </div>
  );
}

export default App;
