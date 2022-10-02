import "./App.scss";
import { HelmetScene, Interface } from "./components";
import { ScrollText } from "./components/ScrollText/ScrollText";

const App = () => {
  return (
    <div className="App">
      <HelmetScene />
      <Interface />
      <ScrollText />
    </div>
  );
};

export default App;
