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
      {showText({ start: 0, end: 0.05 }) && (
        <div className="scrollText__initial">
          <h1 className="scrollText__initial-title">Black helmet</h1>
          <p className="scrollText__initial-cta">Scroll down</p>
        </div>
      )}
      {scrollData.map(
        (data) =>
          showText(data) && (
            <div
              className="scrollText"
              key={data.index}
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
