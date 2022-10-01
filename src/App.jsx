import { HelmetScene, Interface } from "./components";
import "./App.scss";
import { useEffect, useState } from "react";
import { useScroll } from "framer-motion";

const App = () => {
  const { scrollYProgress } = useScroll();
  const [yProgress, setyProgress] = useState(scrollYProgress.current);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setyProgress(latest);
    });
  }, [scrollYProgress]);

  return (
    <div className="App">
      <HelmetScene yProgress={yProgress} />
      <Interface />
    </div>
  );
};

export default App;
