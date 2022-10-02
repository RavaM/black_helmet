import { HelmetScene, Interface } from "./components";
import "./App.scss";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { ScrollText } from "./components/ScrollText/ScrollText";

const App = () => {
  const { scrollYProgress } = useScroll();
  const [yProgress, setYProgress] = useState(scrollYProgress.current);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setYProgress(latest);
    });
  }, [scrollYProgress]);

  return (
    <div className="App">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <HelmetScene yProgress={yProgress} />
      <Interface />
      <ScrollText />
    </div>
  );
};

export default App;
