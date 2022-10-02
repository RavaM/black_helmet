import { useScroll } from "framer-motion";
import { scrollData } from "../../data";
import "./ScrollText.scss";

export const ScrollText = () => {
  const { scrollYProgress } = useScroll();

  const showText = (data) => {
    return (
      data.start <= scrollYProgress.current &&
      data.end >= scrollYProgress.current
    );
  };

  return (
    <div className="scrollText__container">
      {scrollData.map(
        (data) =>
          showText(data) && (
            <div className="scrollText" key={data.text}>
              {data.text}
            </div>
          )
      )}
    </div>
  );
};
