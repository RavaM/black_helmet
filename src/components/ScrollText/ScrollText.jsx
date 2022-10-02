import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { scrollData } from "../../data";
import "./ScrollText.scss";

export const ScrollText = () => {
  const { scrollYProgress } = useScroll();
  const [yProgress, setYProgress] = useState(scrollYProgress.current);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setYProgress(latest);
    });
  }, [scrollYProgress]);

  const showText = (data) => {
    return data.start <= yProgress && data.end >= yProgress;
  };

  return (
    <div className="scrollText__container">
      {scrollData.map(
        (data) =>
          showText(data) && (
            <div
              className="scrollText"
              key={data.text}
              style={{
                top: data.top,
                left: data.left,
              }}
            >
              {data.text}
            </div>
          )
      )}
    </div>
  );
};
